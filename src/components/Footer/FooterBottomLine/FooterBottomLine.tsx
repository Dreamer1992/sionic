import React, {FC} from 'react';
import classes from './FooterBottomLine.module.css';

const FooterBottomLine: FC = () => {
    return (
        <div className={classes.footerBottomLine}>
            <a href="/">© Sionic</a>
            <a href="/" target="_blank">Правовая информация</a>
            <a href="/" target="_blank">Политика конфиденциальности</a>
        </div>
    )
}

export default FooterBottomLine;