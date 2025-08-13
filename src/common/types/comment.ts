import { Episodes } from "./anime"
import { Profile } from "./user"

export type Comment = {
    id: string
    message: string

    parent: Comment | null
    parentId: string | null
    replies: Comment[]

    userId: string
    episodeTitle: string
    user: Profile
    episode: Episodes

    createdAt: Date
    updatedAt: Date
}