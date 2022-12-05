import React, { FC, useEffect, useState } from "react";

import more from '../../../assets/more.svg'
import frame from '../../../assets/frame.svg'
import imbd from '../../../assets/Imbd.svg'

import styles from './ContentPost.module.css'
import { IPostContent } from '../../../interface'
import Carousel from "./Carousel/Carousel";
import PostCard, { IPostCard } from "../PostList/PostCard/PostCard";
import Button from "../Button/Button";
import { ThemeVariant, useTheme } from "../../../context/ThemeContext";

export interface ContentPostProps {
    contentPost: IPostContent
    postCards: IPostCard[]
    onClick?: () => void
}
const ContentPost: FC<ContentPostProps> = ({contentPost, postCards,onClick}) => {
    const {theme} = useTheme()

    const contentCardTheme = theme === ThemeVariant.light


    return(
        <div className={styles.contentWrapper}>
            <div className={`${styles.contentPost} ${contentCardTheme ? styles.darkContentPost : styles.contentPost}`}>
                <div className={styles.contentPoster}>
                    <img src={contentPost.posterUrl} alt={contentPost.type}  className={styles.contentPosterImg}/>
                    <div className={styles.contentPosterBtn}>
                        <Button className={styles.contentPostMore} onClick={onClick}><img src={more} alt="icon" /></Button>
                        <Button className={styles.contentPostFrame}><img src={frame} alt="icon" /></Button>
                    </div>
                </div>
                <div className={styles.contentDetail}>
                    <p className={styles.contentGenres}>{contentPost.genres?.map(genres => genres.genre[0].toLocaleUpperCase() + genres.genre?.slice(1)).join(' • ')}</p>
                    <h3 className={`${styles.contentTitle} ${contentCardTheme ? styles.darkContentTitle : styles.contentTitle}`}>{!contentPost.nameRu?.length ? contentPost.nameOriginal : contentPost.nameRu}</h3>
                    <div className={styles.contentRating}>
                        <p className={styles.contentRatingKinopoisk}>{contentPost.ratingKinopoisk}</p>
                        {contentPost.ratingImdb === null
                        ? 
                            <></>
                        :
                            <span className={styles.contentRatingImbd}><img src={imbd} alt='logo' />{contentPost.ratingImdb}</span>
                        }
                        {contentPost.filmLength === null
                        ? 
                            <></>
                        :
                            <span className={styles.contentLength}>{contentPost.filmLength} min</span>
                    }
                    </div>
                    <p className={`${styles.contentDescription} ${contentCardTheme ? styles.darkContentDescription : styles.contentDescription}`}>{contentPost.description}</p>
                    <div className={styles.contentInfoBlock}>
                        <div>
                            <p className={styles.contentInfoLeftBlock}>Year</p>
                            <p className={styles.contentInfoLeftBlock}>Released</p>
                            <p className={styles.contentInfoLeftBlock}>BoxOffice</p>
                            <p className={styles.contentInfoLeftBlock}>Country</p>
                            <p className={styles.contentInfoLeftBlock}>Production</p>
                            <p className={styles.contentInfoLeftBlock}>Actors</p>
                            <p className={styles.contentInfoLeftBlock}>Director</p>
                            <p className={styles.contentInfoLeftBlock}>Writers</p>
                        </div>
                        <div className={`${styles.contentRigthBlock} ${contentCardTheme ? styles.darkContentRigthBlock : styles.contentRigthBlock}`}>
                            <p className={styles.contentInfoRigthBlock}>{contentPost.year}</p>
                            <p className={styles.contentInfoRigthBlock}>15 Jul {contentPost.year}</p>
                            <p className={styles.contentInfoRigthBlock}>$381,409,310</p>
                            <p className={styles.contentInfoRigthBlock}>{contentPost.countries?.map(country => country.country?.replace('', ' '))}</p>
                            <p className={styles.contentInfoRigthBlock}>Heyday Films, Moving Picture Company, Warner Bros.</p>
                            <p className={styles.contentInfoRigthBlock}>Daniel Radcliffe, Emma Watson, Rupert Grint</p>
                            <p className={styles.contentInfoRigthBlock}>David Yates</p>
                            <p className={styles.contentInfoRigthBlock}>J.K. Rowling, Steve Kloves</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.carousel}>
                <Carousel>
                    <div className={styles.carousel}>
                        {postCards.map((postCard: IPostCard) => <PostCard key={postCard.filmId || postCard.kinopoiskId} postCard={postCard} />)}
                    </div>
                </Carousel>
            </div>

        </div>
    )
}

export default ContentPost;