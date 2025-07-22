import { days } from "../constant/day";
import { scheduleType } from "../types/anime";

export function convertDay(date: Date) {
    return {
        name: days[date.getDay()].name,
        value: days[date.getDay()].value as keyof scheduleType,
    };
}