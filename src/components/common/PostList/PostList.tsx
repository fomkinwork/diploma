import React, { FC } from "react";
import ContentPostButton from "../ContentPost/ContentPostButton/ContentPostButton";
import PostCard, { IPostCard } from "./PostCard/PostCard";

import styles from './PostList.module.css'

export interface PostListProps {
    postCards: IPostCard[]
}

const PostList: FC<PostListProps> = ({ postCards= []} ) => {
    return(
        <div className={styles.postList}>
            <div className={styles.postListContainer}>
                {postCards
                    .map((postCard: IPostCard) => 
                        <PostCard key={postCard.filmId || postCard.kinopoiskId} postCard={postCard} />)
                }
            </div>
            <ContentPostButton onClick={() => {}} className={styles.postListBtn} children='Show more'/>
        </div>
        
    )
}

export default PostList;