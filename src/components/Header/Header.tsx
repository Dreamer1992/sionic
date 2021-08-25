import React, {FC} from 'react';
import classes from './Header.module.css';
import Logo from "../common/Logo/Logo";
import Country from './Country/Country';
import Avatar from './Avatar/Avatar';
import Basket from "./Basket/Basket";
import SearchBar from "./SearchBar/SearchBar";

const Header: FC = () => {
    return (
        <div className={classes.header}>
            <Logo/>
            <Country/>
            <SearchBar/>
            <Basket/>
            <Avatar/>
        </div>
    )
}

export default Header;