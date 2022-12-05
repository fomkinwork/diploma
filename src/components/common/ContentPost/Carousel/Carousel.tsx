import React, { Children, cloneElement, FC, useEffect, useState } from "react";

import styles from './Carousel.module.css'
import { WithChildren } from "../../../../types/withChildren";
import { ThemeVariant, useTheme } from "../../../../context/ThemeContext";

const PAGE_WIDTH = 306;

const Carousel: FC<WithChildren> = ({children}) => {
    const {theme} = useTheme()

    const carouselTheme = theme === ThemeVariant.light

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
                <p className={`${styles.carouselTitle} ${carouselTheme ? styles.darkCarouselTitle : styles.carouselTitle}`}>Recommendations</p>
                <div className={`${styles.carouselActions} ${carouselTheme ? styles.darkCarouselActions : styles.carouselActions}`}>
                    {!!offset && 
                        <button 
                            className={styles.carouselArrowLeft} onClick={handleLeftArrowClick}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.5 17L4.5 12M4.5 12L9.5 7M4.5 12H21" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>}
                    <button className={styles.carouselArrowRigth} onClick={handleRigthArrowClick}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="red" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.5 17L19.5 12M19.5 12L14.5 7M19.5 12H3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>                    
                </div>
            </div>
            <div className={styles.windowCarousel}>
                <div className={styles.allItemsContainer} style={{transform: `translateX(${offset}px)`}}>{children}</div>
            </div>
        </div>
    )
}

export default Carousel;