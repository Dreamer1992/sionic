import React, {FC} from 'react';
import {Link} from 'react-router-dom';
import classes from './Logo.module.css';

const Logo: FC = () => {
    return <Link to="/" className={classes.logo}>React</Link>
}

export default Logo;