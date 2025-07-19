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
    rating: string
    status: string
    duration: string
    season: string
    realeaseAt: string
    genres: AnimeGenres[]
}

export type Episodes = {
    title: string
    episode: number
    link: string
    createdAt: string

    Anime: Anime
    animeId: string

    EpsLink: Epslink[]
}

export type Epslink = {
    id: string
    index: number
    epsName: string
    name: string
    url: string

    Episode: Episodes
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
