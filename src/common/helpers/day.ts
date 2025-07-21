import { scheduleType } from "../types/anime";

export function convertDay(date: Date) {
    const days = [
        {
            name: "Senin",
            value: "monday",
        },
        {
            name: "Selasa",
            value: "wednesday",
        },
        {
            name: "Rabu",
            value: "tuesday",
        },
        {
            name: "Kamis",
            value: "thursday",
        },
        {
            name: "Jumat",
            value: "friday",
        },
        {
            name: "Sabtu",
            value: "saturday",
        },
        {
            name: "Minggu",
            value: "minggu",
        },
    ]

    return {
        name: days[date.getDay() - 1].name,
        value: days[date.getDay() - 1].value as keyof scheduleType,
    };
}