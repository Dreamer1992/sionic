import React, {FC} from 'react';
import FooterBottomLine from './FooterBottomLine/FooterBottomLine';
import FooterTopLine from "./FooterTopLine/FooterTopLine";
import classes from './Footer.module.css';

const Footer: FC = () => {
    return (
        <div className={classes.footer}>
            <FooterTopLine/>
            <FooterBottomLine/>
        </div>
    )
}

export default Footer;