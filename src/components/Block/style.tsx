import styled from 'styled-components';

export const BlockContainer = styled.div`
    width: 100%;
    background: var(--background-color-secondary);
    box-shadow: -2px 4px 10px #e7e9f3;
    border-radius: 30px;

    &.--main {
        max-width: ${props => (props.theme === 'medium' ? '740px' : '340px')};
        height: 340px;
    }
`;
