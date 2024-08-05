import React from 'react';
import { HeaderInner, HeaderUser, HeaderUserCircle, HeaderUserPhoto } from './style';
import ProfileImage from '../../assets/header/profile-photo.svg';
import { Navigation } from '../Navigation';

export const Header: React.FC = () => (
    <HeaderInner>
        <Navigation />
        <HeaderUser>
            <HeaderUserCircle>2</HeaderUserCircle>
            <HeaderUserPhoto src={ProfileImage} alt="User Profile" />
        </HeaderUser>
    </HeaderInner>
);
