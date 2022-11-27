import React, { FC } from "react";
import { slider } from "../../../../store/AsynsStore/slider";
import PostCard, { IPostCard } from "../../PostList/PostCard/PostCard";

import styles from './Slider.module.css'

export interface PostListProps {
    postCards: IPostCard[]
}

const Slider: FC<PostListProps> = ({postCards=[]}) => {
    return(
        <div className={styles.slider__wrapper}>
            <div className="swiper-container image-slider">
                <div className="swiper-wrapper image-slider__wrapper">
                    <div className="swiper-slide image-slider__slide">
                        <div className={styles.sliderContent}>
                            {postCards.map((postCard: IPostCard) => <PostCard key={postCard.kinopoiskId} postCard={postCard} />)}
                        </div>
                    </div>
                </div>
                <div className="pagination-block swiper-pagination"></div>
            </div>
        </div>
    )
}

export default Slider;