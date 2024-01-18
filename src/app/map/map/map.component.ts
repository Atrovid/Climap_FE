import { Component } from "@angular/core";
import { LeafletModule } from "@asymmetrik/ngx-leaflet";
import * as L from "leaflet";
import "leaflet.heat/dist/leaflet-heat.js";
import { SensorService } from "../sensor.service";

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
export class MapComponent {
    constructor(private sensorService: SensorService) {}

    map!: L.Map;
    // @ts-ignore
    heatLayer!: L.HeatLayer;
    markers: L.Marker<any>[] = [];

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

        this.heatLayer.setLatLngs(measurements.map((m) => [m.latitude, m.longitude, m.heat[0].celsiusDegree]));
        this.heatLayer.redraw();

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

    onMapReady(map: any) {
        this.startMap(map);
    }
}
