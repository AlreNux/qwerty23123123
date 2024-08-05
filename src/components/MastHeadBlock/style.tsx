import { ReactSVG } from 'react-svg';
import styled from 'styled-components';

export const MastHeadContainer = styled.div`
    min-width: ${props => (props.theme === 'search' ? '400px' : '250px')};
    margin-left: ${props => (props.theme === 'search' ? '0px' : '50px')};
    padding: 13px ${props => (props.theme === 'search' ? '0px' : '30px')};
    border-radius: 10px;
    display: flex;
    align-items: center;
    background: var(--background-color-input);
`;

export const MastHeadIcon = styled(ReactSVG)`
    & > div {
        display: flex;
        padding: ${props => (props.theme === 'search' ? '0 30px' : '0')};
    }
`;
