import React, {FC} from 'react';
import classes from './FooterTopLine.module.css';
import SocialIcons from './SocialIcons/SocialIcons';
import Logo from "../../common/Logo/Logo";
import Icon from "../../common/Icon/Icon";
import {ReactComponent as GooglePayIcon} from '../../../assets/images/icons/google-play.svg';
import {ReactComponent as AppStoreIcon} from '../../../assets/images/icons/app-store.svg';

const FooterTopLine: FC = () => {
    return (
        <div className={classes.footerTopLine}>
            <div className={classes.leftColumn}>
                <Logo/>
                <div>
                    <SocialIcons/>
                </div>
            </div>

            <div className={classes.rightColumn}>
                <div>Устанавливайте приложение</div>
                <div className={classes.appDownloadIcons}>
                    <Icon Icon={GooglePayIcon} url="https://pay.google.com/"/>
                    <Icon Icon={AppStoreIcon} url="https://www.apple.com/"/>
                </div>
            </div>
        </div>
    )
}

export default FooterTopLine;