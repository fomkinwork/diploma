import React, {ChangeEventHandler, FC, FormEventHandler, MouseEventHandler, useState} from 'react';
import search from "../../../../../assets/search.svg"
import FilterMenu from '../../FilterMenu/FilterMenu';

// @ts-ignore
import styles from "./SearchInput.module.css";

interface SearchInputProps {
    query: string
    onClose: MouseEventHandler
    onChange: ChangeEventHandler<HTMLInputElement>
    onSubmit: FormEventHandler<HTMLFormElement>
}

const SearchInput: FC<SearchInputProps> = ({ query, onChange, onSubmit }) => {
    const [open, setOpen] = useState(false);
    const handleToggleBurgerMenu = (e:any) => {
        setOpen(prevState => !prevState);
    }
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
            <div>
                <img className={styles.closeIcon} onClick={handleToggleBurgerMenu} src={search} alt={"close icon"} />
                {!!open && <FilterMenu/>}
            </div>
        </form>
    );
};

export default SearchInput;