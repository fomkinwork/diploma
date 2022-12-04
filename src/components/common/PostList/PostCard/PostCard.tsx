import React, { Children, FC, MouseEventHandler } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { WithChildren } from "../../../../types/withChildren";

import styles from './PostCard.module.css'

export interface IPostCard {
  countries?:[{
    country?: string
  }]
  genres?: [{
    genre?: string
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
}

export interface PostCardProps {
  postCard: IPostCard
}


const PostCard: FC<PostCardProps> = ({postCard}) => {
    const navigate = useNavigate();

    const handlePostCardOpen = () => navigate(`/main/${postCard.kinopoiskId}`);

    return(
        <div className={styles.postcardContainer}>
            <img src={postCard.posterUrl} alt={postCard.nameOriginal} className={styles.postCardPoster} />
            <p className={styles.postCardRating}>{postCard.ratingKinopoisk}</p>
            <p className={styles.postCardTitle} onClick={handlePostCardOpen}>
              {!postCard.nameRu?.length ? postCard.nameOriginal : postCard.nameRu}
            </p>
            <p className={styles.postCardGenre}>
              {postCard.genres?.map(genres => genres.genre + ' • ')}</p>
        </div>
    )
}

export default PostCard;