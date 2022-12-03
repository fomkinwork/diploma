import React, { ChangeEventHandler, FC, FormEventHandler, useState } from "react";
import FilterMenuBtn from "./FilterMenuBtn/FilterMenuBtn";
import close from '../../../../assets/Close-icon.svg'

import styles from './FilterMenu.module.css'

interface FilterInputProps {
    query?: string
    onClose?: () => void
    onChange?: ChangeEventHandler<HTMLInputElement>
    onSubmit?: FormEventHandler<HTMLFormElement>
    onClick?: () => {}
}

const FilterMenu: FC<FilterInputProps> = ({query, onClose, onChange, onSubmit, onClick}) => {

    const [open, setOpen] = useState(false);
    const handleToggleBurgerMenu = (e:any) => {
        setOpen(prevState => !prevState);
    }

    return(
        <div className={`
            ${styles.filterContainer}
            ${open ? styles.activeContainer : styles.filterContainer}`}
            
            >
            <div className={styles.filterHeader}>
                <p className={styles.filterTitle}>Filtels</p>
                <img src={close} alt="logo" onClick={handleToggleBurgerMenu} className={styles.filterIcon}/>
            </div>
            <div className={styles.filterSort}>
                <p className={styles.filterNameBlock}>Sort by</p>
                <div className={styles.filterSortActions}>
                    <FilterMenuBtn children='Rating' onClick={() => {}} className={styles.filterRating}/>
                    <FilterMenuBtn children='Year' onClick={() => {}} className={styles.filterYear}/>
                </div>
            </div>
            <div className={styles.filterMovei}>
                <p className={styles.filterNameBlock}>Full or short movie name</p>
                <input 
                    className={styles.filterMovieNameText} 
                    id={'filterName'}
                    value={query}
                    onChange={onChange}
                    name={"searchInput"}
                    placeholder={'Your text'}
                />
            </div>
            <div className={styles.filterGenre}>
                <p className={styles.filterNameBlock}>Genre</p>
                <span></span>
            </div>
            <div className={styles.filterContent}>
                <p className={styles.filterNameBlock}>Years</p>
                <div className={styles.filterInput}>
                    <input 
                        id={"search"}
                        value={query}
                        onChange={onChange}
                        name={"searchInput"}
                        placeholder={"From"}
                        className={styles.filterSearhInput}
                    />
                    <input 
                        id={"search"}
                        value={query}
                        onChange={onChange}
                        name={"searchInput"}
                        placeholder={"To"}
                        className={styles.filterSearhInput}
                    />
                </div>
            </div>
            <div className={styles.filterContent}>
                <p className={styles.filterNameBlock}>Ratig</p>
                <div className={styles.filterInput}>
                    <input
                        id={"search"}
                        value={query}
                        onChange={onChange}
                        name={"searchInput"}
                        placeholder={"From"}
                        className={styles.filterSearhInput}
                    />
                    <input 
                        id={"search"}
                        value={query}
                        onChange={onChange}
                        name={"searchInput"}
                        placeholder={"To"}
                        className={styles.filterSearhInput}
                    />
                </div>
            </div>
            <div>
                <p>Country</p>
                <div>
                    <select name="" id=""></select>
                </div>
            </div>
            <div className={styles.filterSortActionsFooter}>
                <FilterMenuBtn children='Clear filter' onClick={() => {}} className={styles.filterClear}/>
                <FilterMenuBtn children='Show result' onClick={() => {}} className={styles.filterResult}/>
            </div>
        </div>
    )
}

export default FilterMenu;