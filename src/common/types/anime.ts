export type Anime = {
    id: string

    image: string
    title: string
    titleJap: string
    titleEng: string

    synopsis: Synopsis[]

    episode: number
    link: string
    type: string
    rating: number
    status: string
    duration: string
    season: string
    realeaseAt: string
    genres: AnimeGenres[]
}


export type Synopsis = {
    id: string
    animeId: string
    text: string
}

export type AnimeGenres = {
    genreName: string
    animeId: string
}

export type Genres = {
    name: string
    count: number
}
