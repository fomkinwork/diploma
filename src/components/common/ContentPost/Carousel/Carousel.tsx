import React, { Children, cloneElement, FC, useEffect, useState } from "react";

import styles from './Carousel.module.css'
import { WithChildren } from "../../../../types/withChildren";
import arrowLeft from '../../../../assets/Arrow-left.svg'
import arrowRigth from '../../../../assets/Arrow-rigth.svg'

const PAGE_WIDTH = 306;

const Carousel: FC<WithChildren> = ({children}) => {

    const [offset, setOffset] = useState(0)

    const handleLeftArrowClick = () => {

        setOffset((currentOffset: number) => {
            const newOffset = currentOffset + PAGE_WIDTH

            return newOffset        
        })
    }

    const handleRigthArrowClick = () => {
        
        setOffset((currentOffset: number) => {
            const newOffset = currentOffset - PAGE_WIDTH

            return newOffset         
        })
    }

    return(
        <div className={styles.carouselContainer}>
            <div className={styles.carouselItems}>
                <p className={styles.carouselTitle}>Recommendations</p>
                <div>
                    <img src={arrowLeft} alt="arrow" onClick={handleLeftArrowClick}/>
                    <img src={arrowRigth} alt="arrow" onClick={handleRigthArrowClick}/>
                </div>
            </div>
            <div className={styles.windowCarousel}>
                <div className={styles.allItemsContainer} style={{transform: `translateX(${offset}px)`}}>{children}</div>
            </div>
        </div>
    )
}

export default Carousel;