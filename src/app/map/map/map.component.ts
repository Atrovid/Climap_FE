import { Component } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import L from 'leaflet';
import 'leaflet.heat/dist/leaflet-heat.js';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [LeafletModule],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css',
})
export class MapComponent {
  options = {
    layers: [
      L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '',
      }),
    ],
    zoom: 13,
    center: L.latLng(49.1828, -0.3708),
  };

  jsonObj = [
    {
      latitude: 46.7196181682508,
      longitude: 77.7462972278178,

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
      dateDataCapture: '2023-05-267T12:43:30.700+00:00',
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

  // Fonction pour lire les données JSON
  processJSONData(jsonData: any) {
    // const fileContent = fs.readFileSync(filename, 'utf-8');
    // const jsonData = JSON.parse(fileContent);
    var result = [];

    for (var i = 0; i < jsonData.length; i++) {
      var dataInterm = [];
      dataInterm[0] = jsonData[i].latitude;
      dataInterm[1] = jsonData[i].longitude;
      dataInterm[2] = jsonData[i].heat[0].celsiusDegree;
      dataInterm[3] = jsonData[i].sound[0].decibel;
      dataInterm[4] = jsonData[i].brightness[0].lux;
      dataInterm[5] = jsonData[i].dateDataCapture;
      dataInterm[6] = jsonData[i].humidity[0].particlesPerCubicCentimeter;
      dataInterm[7] = jsonData[i].microparticle[0].particlesPerCubicCentimeter;
      dataInterm[8] = jsonData[i].idCharacteristic;
      result.push(dataInterm);
    }

    return result;
  }

  startMap(map: L.Map) {
    // cette partie est à decommenter lorsqu'on commence à utuiliser des fichiers json
    // fetch('http://127.0.0.1:8080/message.json')
    //   .then(response => response.json())
    //   .then(jsonData => {
    // Appeler la fonction pour recupérer les données JSON

    const SensorsData = this.jsonObj;
    console.log(SensorsData);

    // Ajouter la couche OpenStreetMap à la carte
    // L.heatLayer(SensorsData, { radius: 25 }).addTo(map);

    // Ajouter des tooltips pour chaque point
    // SensorsData.forEach((point) => {
    //   L.marker([point.latitude, point.longitude])
    //     .bindTooltip(
    //       'Sensor n° ' +
    //         point.idCharacteristic +
    //         '\n Heat' +
    //         point.heat +
    //         '\nSound ' +
    //         point.sound +
    //         '\nBrightness ' +
    //         point.brightness +
    //         '\nHumidity ' +
    //         point.humidity +
    //         '\nMicroparticle ' +
    //         point.microparticle
    //     )
    //     .addTo(map);
    // });
    SensorsData.forEach((point) => {
      L.marker([point.latitude, point.longitude])
        .bindTooltip('bonjour')
        .addTo(map);
    });

    // })
    //   .catch(error => console.error('Erreur lors du chargement du fichier JSON :', error));
  }

  onMapReady(map: any) {
    this.startMap(map);
  }
}
