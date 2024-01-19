export interface MeasureDataType {
    label: string;
    value: MeasureDataUnits;
}

export type MeasureDataUnits = "brightness" | "temperature" | "humidity" | "sound";

export const measureDataConfigs: Map<MeasureDataUnits, MeasureDataType> = new Map([
    [
        "brightness",
        {
            label: "Luminosité",
            value: "brightness",
        },
    ],
    [
        "temperature",
        {
            label: "Température",
            value: "temperature",
        },
    ],
    [
        "humidity",
        {
            label: "Humidité",
            value: "humidity",
        },
    ],
    [
        "sound",
        {
            label: "Son",
            value: "sound",
        },
    ],
]);
