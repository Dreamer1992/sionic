import React, {FC} from 'react';
import classes from './SearchBar.module.css';
import {ReactComponent as MagnifierIcon} from '../../../assets/images/header/magnifier.svg';

const SearchBar: FC = () => {
    return (
        <div className={classes.searchBar}>
            <input type="text" name="search" className={classes.inputSearch}
                   placeholder="Поиск бренда, товара, категории..."/>
            <button type="button" className={classes.btnSearch}>
                <MagnifierIcon/>
            </button>
        </div>
    )
}

export default SearchBar;