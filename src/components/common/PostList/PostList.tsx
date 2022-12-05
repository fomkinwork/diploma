import React, { FC } from "react";
import Button from "../Button/Button";
import PostCard, { IPostCard } from "./PostCard/PostCard";

import styles from './PostList.module.css'

export interface PostListProps {
    postCards: IPostCard[]
    onClick?: () => void
}

const PostList: FC<PostListProps> = ({ postCards= [], onClick} ) => {
    return(
        <div className={styles.postList}>
            <div className={styles.postListContainer}>
                {postCards.map
                    ((postCard: IPostCard) => 
                        <PostCard key={postCard.filmId || postCard.kinopoiskId} postCard={postCard} />)}
            </div>
            <Button onClick={onClick} className={styles.postListBtn}>Show more</Button>
        </div>
        
    )
}

export default PostList;