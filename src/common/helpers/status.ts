// status === "Ongoing"
//     ? "bg-yellow-400"
//     : status === "Completed"
//         ? "bg-green-400"
//         : "bg-red-500"

import { Status } from "../enums/status"


export function statusColor(status: string) {
    let color: string
    if (status === Status.UPCOMING) {
        color = "bg-blue-400"
    } else if (status === Status.ONGOING) {
        color = "bg-yellow-400"
    } else if (status === Status.HIATUS) {
        color = "bg-red-500"
    } else {
        color = "bg-green-400"
    }

    return color as string
}