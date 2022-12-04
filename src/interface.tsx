export interface IPostContent {
  kinopoiskId?: number,
  imdbId?: string,
  nameRu?: string,
  nameEn?: string,
  nameOriginal?: string,
  posterUrl?: string,
  posterUrlPreview?: string,
  coverUrl?: string,
  logoUrl?: string,
  reviewsCount?: number,
  ratingGoodReview?: number,
  ratingGoodReviewVoteCount?: number,
  ratingKinopoisk?: number,
  ratingKinopoiskVoteCount?: number,
  ratingImdb?: number,
  ratingImdbVoteCount?: number,
  ratingFilmCritics?: number,
  ratingFilmCriticsVoteCount?: number,
  ratingAwait?: number,
  ratingAwaitCount?: number,
  ratingRfCritics?: number,
  ratingRfCriticsVoteCount?: number,
  webUrl?: string,
  year?: number,
  filmLength?: number,
  slogan?: string,
  description?: string,
  shortDescription?: string,
  editorAnnotation?: string,
  isTicketsAvailable?: boolean,
  productionStatus?: string,
  type?: string,
  ratingMpaa?: string,
  ratingAgeLimits?: string,
  hasImax?: boolean,
  has3D?: boolean,
  lastSync?:string,
  countries?: [
    {
      country?: string
    }
  ],
  genres?: [
    {
      genre?: string
    }
  ],
  startYear?: number,
  endYear?: number,
  serial?: boolean,
  shortFilm?: boolean,
  completed?: boolean
  favorite?: boolean
}

export interface IInfoPost {
  type: string,
  amount: number,
  currencyCode: string,
  name: string,
  symbol: string
}

export interface IReliase {
  type: string,
  subType: string,
  date: string,
  reRelease: boolean,
  country: {
    country: string
  },
  companies: [
    {
      name: string
    }
  ]
}

export interface ISlider {
  total?: number
}

export interface IStaff {
  staffId?: number,
  nameRu?: string,
  nameEn?: string,
  description?: string,
  posterUrl?: string,
  professionText?: string,
  professionKey?: string
}