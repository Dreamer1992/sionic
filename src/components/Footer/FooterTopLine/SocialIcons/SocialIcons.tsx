import React, {FC} from 'react';
import classes from './SocialIcons.module.css';
import Icon from '../../../common/Icon/Icon';
import {ReactComponent as FacebookIcon} from '../../../../assets/images/icons/facebook.svg';
import {ReactComponent as InstagramIcon} from '../../../../assets/images/icons/inst.svg';
import {ReactComponent as VkIcon} from '../../../../assets/images/icons/vk.svg';

const SocialIcons: FC = () => {
    return (
        <>
            <div>Присоединяйтесь к нам</div>
            <div className={classes.socialIconsBlock}>
                <Icon Icon={FacebookIcon} url="https://www.facebook.com/"/>
                <Icon Icon={InstagramIcon} url="https://www.instagram.com/"/>
                <Icon Icon={VkIcon} url="https://vk.com/"/>
            </div>
        </>
    )
}

export default SocialIcons;