import React from 'react';
import { SearchInput } from './style';
import MagnifierIcon from '../../assets/dashboard/icon/magnifier-icon.svg';
import { MastHeadBlock } from '../MastHeadBlock';

export const Search: React.FC = () => (
    <MastHeadBlock theme="search" icon={MagnifierIcon}>
        <SearchInput type="text" name="Search" autoComplete="off" placeholder="Search" />
    </MastHeadBlock>
);
