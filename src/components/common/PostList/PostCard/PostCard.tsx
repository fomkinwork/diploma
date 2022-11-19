import React, { Children, FC, MouseEventHandler } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { WithChildren } from "../../../../types/withChildren";

import styles from './PostCard.module.css'

export interface IPostCard {
    id: number
    date: string
    title: string
    text: string
    image?: string
    onClick?: MouseEventHandler
    like?: boolean,
    dislike?: boolean,
    favorite?: boolean,
    likes?: number,
    dislikes?: number
    author?: number
    lesson_num?: number
}

const PostCard: FC<IPostCard & WithChildren> = (props) => {

    const { id = 1, title, date, text, image } = props;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handlePostCardOpen = () => navigate(`/main/${id}`);
    return(
        <div className={styles.postcardContainer}>
            <img src={image} alt={title} className={styles.postCardPoster} />
            <p className={styles.postCardTitle} onClick={handlePostCardOpen}>{title}</p>
            <p className={styles.postCardGenre}>{text}</p>
        </div>
    )
}

export default PostCard;