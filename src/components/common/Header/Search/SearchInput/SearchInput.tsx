import React, {ChangeEventHandler, FC, FormEventHandler} from 'react';
import search from "../../../../../assets/search.svg"

// @ts-ignore
import styles from "./SearchInput.module.css";

interface SearchInputProps {
    query: string
    onClose: () => void
    onChange: ChangeEventHandler<HTMLInputElement>
    onSubmit: FormEventHandler<HTMLFormElement>
}

const SearchInput: FC<SearchInputProps> = ({ query, onChange, onClose, onSubmit }) => {

    return (
        <form onSubmit={onSubmit} className={styles.searchInputWrapper}>
            <input
                id={"search"}
                value={query}
                onChange={onChange}
                name={"searchInput"}
                placeholder={"Search..."}
                className={styles.searchInput}
            />
            <img className={styles.closeIcon} onClick={onClose} src={search} alt={"close icon"} />
        </form>
    );
};

export default SearchInput;