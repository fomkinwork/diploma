import React, { FC } from "react";
import { IPostCard } from "../PostList/PostCard/PostCard";
import more from '../../../assets/more.svg'
import frame from '../../../assets/frame.svg'

import styles from './ContentPost.module.css'
import PostButton from "./ContentPostButton/ContentPostButton";

export interface ContentPostProps {
    contentPost: IPostCard
}

const ContentPost: FC<ContentPostProps> = ({contentPost}) => {
    return(
        <div className={styles.contentPostWrapper}>
            <div className={styles.contentPostPoster}>
                <img 
                    src={!!contentPost ? contentPost.image : "error"} 
                    alt={contentPost.title}  
                    className={styles.contentPostPosterImg}/>
                    <span>{contentPost.author}</span>
                <div className={styles.contentPostPosterActions}>
                    <PostButton className={styles.contentPostMore} icon={more} />
                    <PostButton className={styles.contentPostFrame} icon={frame} />
                </div>
            </div>
            <div className={styles.contentPostInfo}>
                <p className={styles.contentPostInfoGenre}>{!!contentPost && contentPost.text}</p>
                <h3 className={styles.contentPostInfoTitle}>{!!contentPost && contentPost.title}</h3>
                <div className={styles.contentPostInfoBlock}>
                    <span className={styles.contentPostInfoBlockRating}>{contentPost.author}</span>
                    <span className={styles.contentPostInfoBlockRatingService}>{contentPost.author}</span>
                    <span className={styles.contentPostInfoBlockDuration}>{contentPost.author}</span>
                </div>
                <p className={styles.contentPostInfoMovei}>{contentPost.date}<span>{contentPost.date}</span></p>
                <p className={styles.contentPostInfoMovei}>{contentPost.date}<span>{contentPost.date}</span></p>
                <p className={styles.contentPostInfoMovei}>{contentPost.date}<span>{contentPost.date}</span></p>
                <p className={styles.contentPostInfoMovei}>{contentPost.date}<span>{contentPost.date}</span></p>
                <p className={styles.contentPostInfoMovei}>{contentPost.date}<span>{contentPost.date}</span></p>
                <p className={styles.contentPostInfoMovei}>{contentPost.date}<span>{contentPost.date}</span></p>
                <p className={styles.contentPostInfoMovei}>{contentPost.date}<span>{contentPost.date}</span></p>
                <p className={styles.contentPostInfoMovei}>{contentPost.date}<span>{contentPost.date}</span></p>
            </div>
        </div>
    )
}

export default ContentPost;