import React, {FC} from 'react';
import {ReactComponent as CountryIcon} from '../../../assets/images/header/country.svg';
import classes from './Country.module.css';

const Country: FC = () => {
    return (
        <div className={classes.country}>
            <CountryIcon/>
            <div className={classes.countryName}>Ставрополь</div>
        </div>
    )
}

export default Country;