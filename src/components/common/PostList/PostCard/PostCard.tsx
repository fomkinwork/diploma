import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

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
}

export interface PostCardProps {
  postCard: IPostCard
}


const PostCard: FC<PostCardProps> = ({postCard}) => {
    const navigate = useNavigate();

    const handlePostCardOpen = () => navigate(`/main/${postCard.filmId || postCard.kinopoiskId}`);

    return(
        <div className={styles.postcardContainer}>
            <img src={postCard.posterUrl} alt={postCard.nameOriginal} className={styles.postCardPoster} />
            <p className={styles.postCardRating}>{!postCard.ratingKinopoisk ? postCard.rating : postCard.ratingKinopoisk}</p>
            <h2 className={styles.postCardTitle} onClick={handlePostCardOpen}>
              {!postCard.nameRu?.length ? postCard.nameOriginal : postCard.nameRu}
            </h2>
            <p className={styles.postCardGenre}>
              {postCard.genres?.map(genres => genres.genre[0].toLocaleUpperCase() + genres.genre?.slice(1)).join(' • ')}</p>
        </div>
    )
}

export default PostCard;