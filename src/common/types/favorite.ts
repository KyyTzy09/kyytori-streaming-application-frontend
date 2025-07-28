import { Anime } from "./anime"
import { Profile } from "./user"

export type FavoritesAnime = {
    id: string
    user: Profile
    anime: Anime

    userId: string
    animeId: string
}

// model Favorites {
//   id String @id @default(ulid())

//   user  Profile @relation(fields: [userId], references: [userId], onDelete: Cascade)
//   anime Anime   @relation(fields: [animeId], references: [id], onDelete: Cascade)

//   userId  String
//   animeId String

//   @@unique([userId, animeId])
// }