import { Episodes } from "./anime"
import { Profile } from "./user"

export type Comment = {
    id: string
    message: string

    userId: string
    episodeTitle: string

    user: Profile
    episode: Episodes

    createdAt: Date
    updateAt: Date
}