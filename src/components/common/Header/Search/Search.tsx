import React, {ChangeEventHandler, FC, FormEventHandler, useState} from 'react';

// @ts-ignore
import styles from "./Search.module.css";
import SearchInput from "./SearchInput/SearchInput";
import SearchIcon from "./SearchIcon/SearchIcon";
import {useNavigate} from "react-router-dom";

interface SearchProps {
    theme?: string;
    query: string
    onChange: ChangeEventHandler<HTMLInputElement>
    onSubmit: FormEventHandler<HTMLFormElement>
}

const Search: FC<SearchProps> = ({theme, query = "", onChange, onSubmit}) => {
    const [open, setOpen] = useState<boolean>(false);
    const navigate = useNavigate()
    const handleClose = () => navigate(`/blog/`)

    const handleCloseSearchInput = () => {
        setOpen(false)
        handleClose()
    };
    const handleOpenSearchInput = () => setOpen(true);

    return (
        <div className={styles.searchWrapper}>
            <SearchInput query={query} onClose={handleCloseSearchInput} onChange={onChange} onSubmit={onSubmit} />
        </div>
    );
};

export default Search;