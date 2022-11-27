import React, { FC, useEffect, useState } from "react";

import more from '../../../assets/more.svg'
import frame from '../../../assets/frame.svg'

import styles from './ContentPost.module.css'
import PostButton from "./ContentPostButton/ContentPostButton";
import {IInfoPost, IPostContent, IReliase, IStaff} from '../../../interface'
import { IPostCard } from "../PostList/PostCard/PostCard";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../store";
import Slider from "./Slider/Slider";
import { useParams } from "react-router-dom";
import { slider } from "../../../store/AsynsStore/slider";
import { staff } from "../../../store/AsynsStore/detailPost";

export interface ContentPostProps {
    contentPost: IPostContent
    postCards: IPostCard
    staffed?: IStaff
}

const ContentPost: FC<ContentPostProps> = ({contentPost, postCards, staffed}) => {

    const {id = 1} = useParams();

    const [post, setPost] = useState<IPostContent | null>(null);
    const [postSlider, setPostSlider] = useState<IPostContent[]>([]);  

    // @ts-ignore
    const {cards} = useSelector(state => state.selectedCard)

    useEffect( () => {
        const selectedPost = cards.find((posts: IPostContent) => posts.kinopoiskId === +id)
        setPost(!!selectedPost ? selectedPost : null)
        slider(setPostSlider, +id)
    }, [cards])

    return(
        <div className={styles.contentPostWrapper}>
            <div className={styles.contentPostPoster}>
                <img 
                    src={!!contentPost ? contentPost.posterUrl : "error"} 
                    alt={contentPost.nameOriginal}  
                    className={styles.contentPostPosterImg}/>
                <div className={styles.contentPostPosterActions}>
                    <PostButton className={styles.contentPostMore} icon={more} />
                    <PostButton className={styles.contentPostFrame} icon={frame} />
                </div>
            </div>
            <div className={styles.contentPostInfo}>
                <p className={styles.contentPostInfoGenres}>{contentPost.genres?.map(genres => genres.genre + ' • ')}</p>
                <h3 className={styles.contentPostInfoTitle}>
                    {!contentPost.nameRu?.length ? contentPost.nameOriginal : contentPost.nameRu}
                </h3>
                <div className={styles.contentPostInfoBlock}>
                    <span className={styles.contentPostInfoBlockRating}>{contentPost.ratingKinopoisk}</span>
                    {contentPost.ratingImdb === null
                        ? 
                            <></>
                        :
                            <span className={styles.contentPostInfoBlockRatingService}>{contentPost.ratingImdb}</span>
                    }
                    {contentPost.filmLength === null
                        ? 
                            <></>
                        :
                            <span className={styles.contentPostInfoBlockLengthMovies}>{contentPost.filmLength} min</span>
                    }
                </div>
                    <p className={styles.contentPostInfoBlockDescription}>{contentPost.description}</p>
                <div className={styles.contentPostInfoBlockDate}>
                    <div className={styles.contentPostInfoBlockMovie}>
                        <p>Year</p>
                        <p>Country</p>
                        <p>Production</p>
                        <p>Director</p>
                        <p>Writers</p>
                    </div>
                    <div className={styles.contentPostInfoBlockMovieInfo}>
                        <p>{contentPost.year}</p>
                        <p>{contentPost.countries?.map(count => count.country + ' ')}</p>
                        <p>{contentPost.ratingKinopoisk}</p>
                        <p>{staffed?.nameEn}</p>
                        <p>{contentPost.ratingKinopoisk}</p>
                    </div>
                </div>
                <div>
                    <Slider postCards={postSlider} key={postCards?.kinopoiskId}/>
                </div>
            </div>
        </div>
    )
}

export default ContentPost;