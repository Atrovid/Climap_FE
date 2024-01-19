import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";

export interface Measurement {
    latitude: number;
    longitude: number;
    heat: [
        {
            celsiusDegree: number;
        }
    ];
    sound: [
        {
            decibel: number;
        }
    ];
    brightness: [
        {
            lux: number;
        }
    ];
    dateDataCapture: string;
    humidity: [
        {
            relativeHumidityPercentage: number;
        }
    ];
    microparticle: [
        {
            particlesPerCubicCentimeter: number;
        }
    ];

    idMeasurement: number;
}

interface Bounds {
    getWest: () => number;
    getSouth: () => number;
    getEast: () => number;
    getNorth: () => number;
}

const mockDataPoints: Measurement[] = [
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
                relativeHumidityPercentage: 72.8533518480013,
            },
        ],
        microparticle: [
            {
                particlesPerCubicCentimeter: 63.1046775677967,
            },
        ],

        idMeasurement: 3301,
    },
];

@Injectable({
    providedIn: "root",
})
export class SensorService {
    constructor() {}

    async getSensorData(bounds?: Bounds): Promise<Measurement[]> {
        const url = environment.backUrl;

        const minLat = bounds?.getSouth();
        const maxLat = bounds?.getNorth();
        const minLng = bounds?.getWest();
        const maxLng = bounds?.getEast();

        const params = bounds ? `?minLat=${minLat}&maxLat=${maxLat}&minLng=${minLng}&maxLng=${maxLng}` : "";

        try {
            const res = await fetch(`${url}sensor${params}`);
            return await res.json();
        } catch (err) {
            console.error("Server not found, loading mock data");
            return mockDataPoints;
        }
    }
}
