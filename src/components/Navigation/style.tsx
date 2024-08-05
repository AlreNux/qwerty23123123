import styled from 'styled-components';
import { ReactSVG } from 'react-svg';

export const NavigationList = styled.ul`
    margin: 0;
`;

export const NavigationItem = styled.li`
    cursor: pointer;
    color: var(--background-color-not-active);
    user-select: none;
    margin-bottom: 54px;

    &:first-child {
        padding-top: 0;
        margin-top: 137px;
    }

    & > a {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 23px 0;
        transition: var(--hover-transition);
        border-right: 3px solid transparent;
    }

    & > a svg path {
        fill: var(--background-color-not-active);
        transition: var(--hover-transition);
    }

    & > a:hover svg path {
        fill: var(--background-color);
    }

    & > a.active svg path {
        fill: var(--background-color);
    }
`;

export const NavigationItemActive = {
    borderRight: '3px solid var(--background-color)',
    borderRadius: '1px',
};

export const NavigationIcon = styled(ReactSVG)`
    & > div {
        display: flex;
    }
`;
