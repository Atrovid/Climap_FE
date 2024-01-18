import { Component } from "@angular/core";
import { LeafletModule } from "@asymmetrik/ngx-leaflet";
import * as L from "leaflet";
import "leaflet.heat/dist/leaflet-heat.js";

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
    options = {
        layers: [
            L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                maxZoom: 18,
                attribution: "",
            }),
        ],
        zoom: 13,
        center: L.latLng(49.1828, -0.3708),
    };

    jsonObj = [
        {
            latitude: 49.1828,
            longitude: -0.3708,

            heat: [
                {
                    celsiusDegree: 43.2744973740857,
                },
            ],
            sound: [
                {
                    decibel: 92.9210643567959,
                },
            ],
            brightness: [
                {
                    lux: 51.5106507489826,
                },
            ],
            dateDataCapture: "2023-05-267T12:43:30.700+00:00",
            humidity: [
                {
                    particlesPerCubicCentimeter: 72.8533518480013,
                },
            ],
            microparticle: [
                {
                    particlesPerCubicCentimeter: 63.1046775677967,
                },
            ],

            idCharacteristic: 3301,
        },
    ];

    startMap(map: L.Map) {
        // cette partie est à decommenter lorsqu'on commence à utuiliser des fichiers json
        // fetch('http://127.0.0.1:8080/message.json')
        //   .then(response => response.json())
        //   .then(jsonData => {
        // Appeler la fonction pour recupérer les données JSON

        const SensorsData = this.jsonObj;

        // Ajouter la couche OpenStreetMap à la carte
        // @ts-ignore
        L.heatLayer(
            SensorsData.map((point) => [point.latitude, point.longitude, point.heat[0].celsiusDegree]),
            { radius: 25 }
        ).addTo(map);

        // Ajouter des tooltips pour chaque point
        for (const point of SensorsData) {
            L.marker([point.latitude, point.longitude])
                .bindTooltip(
                    "Sensor n° " +
                        point.idCharacteristic +
                        "\n Heat" +
                        point.heat[0].celsiusDegree +
                        "\nSound " +
                        point.sound[0].decibel +
                        "\nBrightness " +
                        point.brightness[0].lux +
                        "\nHumidity " +
                        point.humidity[0].particlesPerCubicCentimeter +
                        "\nMicroparticle " +
                        point.microparticle[0].particlesPerCubicCentimeter
                )
                .addTo(map);
        }

        // })
        //   .catch(error => console.error('Erreur lors du chargement du fichier JSON :', error));
    }

    onMapReady(map: any) {
        this.startMap(map);
    }
}
