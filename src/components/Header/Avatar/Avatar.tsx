import React, {FC} from 'react';
import AvatarIcon from '../../../assets/images/header/avatar.png';
import classes from './Avatar.module.css';

const Avatar: FC = () => {
    return (
        <div className={classes.avatar}>
            <img src={AvatarIcon} alt=""/>
        </div>
    )
}

export default Avatar;