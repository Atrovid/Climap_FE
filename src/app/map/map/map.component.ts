import { AfterViewInit, Component } from "@angular/core";
import { LeafletModule } from "@asymmetrik/ngx-leaflet";
import * as L from "leaflet";
import "leaflet.heat/dist/leaflet-heat.js";
import { Measurement, SensorService } from "../sensor.service";

import { TemperatureMap } from "./temperatureMap";

const iconRetinaUrl = "assets/marker-icon-2x.png";
const iconUrl = "assets/marker-icon.png";
const shadowUrl = "assets/marker-shadow.png";
const iconDefault = L.icon({
    iconRetinaUrl,
    iconUrl,
    shadowUrl,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowSize: [41, 41],
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
    selector: "app-map",
    standalone: true,
    imports: [LeafletModule],
    templateUrl: "./map.component.html",
    styleUrl: "./map.component.css",
})
export class MapComponent implements AfterViewInit {
    constructor(private sensorService: SensorService) {}

    ngAfterViewInit(): void {
        this.canvas = document.getElementById("cns0")! as HTMLCanvasElement;
    }

    dataType = "brightness";

    map!: L.Map;
    heatOverlay?: L.ImageOverlay;
    markers: L.Marker<any>[] = [];

    canvas!: HTMLCanvasElement;

    options = {
        layers: [
            L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                maxZoom: 18,
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
            }),
        ],
        zoom: 13,
        center: L.latLng(49.1828, -0.3708),
    };

    async loadVisibleMeasurements() {
        const measurements = await this.sensorService.getSensorData(this.map.getBounds());

        this.drawHeatMap(measurements);

        // Reset tooltips
        for (const marker of this.markers) {
            this.map.removeLayer(marker);
        }
        this.markers = [];

        // Tooltips
        for (const point of measurements) {
            const newMarker = L.marker([point.latitude, point.longitude])
                .bindTooltip(
                    `Mesure n° ${point.idMeasurement}
                        <br/>Température : ${point.heat[0].celsiusDegree.toFixed(1)} °C
                        <br/>Son : ${point.sound[0].decibel.toFixed(0)} dB
                        <br/>Luminosité : ${point.brightness[0].lux.toFixed(2)} lux
                        <br/>Humidité : ${point.humidity[0].relativeHumidityPercentage.toFixed(3)} part/cm³
                        <br/>Microparticules : ${point.microparticle[0].particlesPerCubicCentimeter.toFixed(
                            3
                        )}  part/cm³`
                )
                .addTo(this.map);

            this.markers.push(newMarker);
        }
    }

    async startMap(map: L.Map) {
        this.map = map;

        // @ts-ignore
        this.heatLayer = L.heatLayer([], { radius: 25 }).addTo(map);

        this.loadVisibleMeasurements();

        map.on("moveend", () => {
            this.loadVisibleMeasurements();
        });
    }

    drawHeatMap(measurements: Measurement[]) {
        // Préparation et dessin de la TemperatureMap sur le canvas
        const ctx0 = this.canvas.getContext("2d")!,
            drw0 = new TemperatureMap(ctx0);

        ctx0.clearRect(0, 0, this.canvas.width, this.canvas.height);
        if (this.heatOverlay) this.map.removeLayer(this.heatOverlay);

        drw0.setPointsFromJSON(measurements, this.canvas.width, this.canvas.height, this.dataType);
        drw0.drawLow(
            5,
            8,
            false,
            () => {
                drw0.drawPoints(this.dataType, () => {
                    var imageUrl = this.canvas.toDataURL();
                    var imageBounds: L.LatLngTuple[] = [
                        [49.128039, -0.43499],
                        [49.238, -0.265388],
                    ];
                    this.heatOverlay = L.imageOverlay(imageUrl, imageBounds).addTo(this.map);
                });
            },
            this.dataType
        );
    }

    onMapReady(map: any) {
        this.startMap(map);
    }
}
