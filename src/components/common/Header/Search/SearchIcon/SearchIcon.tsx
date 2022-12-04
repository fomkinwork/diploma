import React, {FC} from 'react';

// @ts-ignore
import search from "../../../../../assets/search.svg"

// @ts-ignore
import styles from "./SearchIcon.module.css";

interface SearchIconProps {
    onClick: () => void
}

const SearchIcon: FC<SearchIconProps> = ({ onClick }) => {
    return (
        <div onClick={onClick} className={styles.iconWrapper}>
            <img src={search} />
        </div>
    );
};

export default SearchIcon;