import { ReactSVG } from 'react-svg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ContinueWithText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
    color: var(--subtext-color-contrast);

    & > p {
        padding: 0 10px;
    }
`;

export const LineContinueWith = styled.hr`
    width: 35%;
    border: 1px solid var(--subtext-color);
    opacity: 50%;
`;

export const ContinueWithSocial = styled.div`
    display: flex;
    padding-top: 10px;
`;

export const ContinueWithLink = styled(Link)`
    margin-left: 50px;
    border: 1px solid var(--background-color-input);
    border-radius: 35px;
    transition: box-shadow var(--hover-transition);
    &:nth-child(1) {
        margin-left: 95px;
    }

    &:focus {
        outline: none;
        box-shadow: var(--box-shadow);
    }

    &:active {
        box-shadow: none;
    }
`;
export const ContinueWithIcon = styled(ReactSVG)`
    & > div {
        display: flex;
    }
`;
