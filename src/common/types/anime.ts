export type Anime = {
    id: string

    image: string
    title: string
    titleJap: string
    titleEng: string

    synopsis: Synopsis[]
    updatedEps: number | string
    episode: number
    link: string
    type: string
    rating: string
    status: string
    duration: string
    season: string
    realeseAt: string
    Episodes: Episodes
    genres: AnimeGenres[]
}

export type Episodes = {
    title: string
    episode: number
    link: string
    createdAt: string
    rating: string
    anime: Anime
    animeId: string

    EpsLink: Epslink[]
}


export type AnimeGenres = {
    genreName: string
    animeId: string
}

export type Genres = {
    name: string
    count: number
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

export type scheduleType = {
    monday: Anime[]
    tuesday: Anime[]
    wednesday: Anime[]
    thursday: Anime[]
    friday: Anime[]
    saturday: Anime[]
    sunday: Anime[]
}