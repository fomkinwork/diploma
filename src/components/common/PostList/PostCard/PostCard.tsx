import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeVariant, useTheme } from "../../../../context/ThemeContext";

import styles from './PostCard.module.css'

export interface IPostCard {
  countries?:[{
    country?: string
  }]
  genres?: [{
    genre?: any
  }] 
  imdbId?: string
  kinopoiskId?: number
  filmId?: number
  nameEn?: string | null
  nameOriginal?: string
  nameRu?: string
  posterUrl?: string
  posterUrlPreview?: string
  ratingImdb?: number
  ratingKinopoisk?: number
  type?: string
  year?: number
  favorite?: boolean
  rating?: number
  filmsId?: number
}

export interface PostCardProps {
  postCard: IPostCard
}


const PostCard: FC<PostCardProps> = ({postCard}) => {
    const navigate = useNavigate();
    const {theme} = useTheme()

    const postCardTheme = theme === ThemeVariant.light

    const handlePostCardOpen = () => navigate(`/main/${postCard.filmId || postCard.kinopoiskId}`);

    return(
        <div className={styles.postcardContainer}>
            <img src={postCard.posterUrl} alt={postCard.nameOriginal} className={styles.postCardPoster} />
            <p className={styles.postCardRating}>{!postCard.ratingKinopoisk ? postCard.rating : postCard.ratingKinopoisk}</p>
            <p className={`${styles.postCardTitle} ${postCardTheme ? styles.darkPostCardTitle : styles.postCardTitle}`} onClick={handlePostCardOpen}>
              {!postCard.nameRu?.length ? postCard.nameOriginal : postCard.nameRu}
            </p>
            <p className={styles.postCardGenre}>
              {postCard.genres?.map(genres => genres.genre[0].toLocaleUpperCase() + genres.genre?.slice(1)).join(' • ')}</p>
        </div>
    )
}

export default PostCard;