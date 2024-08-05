import styled from 'styled-components';

export const MainButton = styled.button`
    width: 100%;
    padding: ${props => (props.theme === 'form' ? '18px 0' : '15px 50px')};
    margin-top: ${props => (props.theme === 'form' ? '50px' : '0')};
    background: var(--background-color);
    color: var(--background-color-secondary);
    border-radius: 10px;
    font-weight: 800;
    font-size: 20px;
    line-height: 25px;
    border: 1px solid transparent;
    transition: var(--hover-transition);

    &:hover {
        color: var(--background-color);
        background: var(--background-color-secondary);
        border: 1px solid var(--background-color);
    }

    &:focus {
        outline: none;
        color: var(--background-color);
        background: var(--background-color-secondary);
        border: 1px solid var(--background-color);
    }

    &:disabled {
        background: var(--disabled-color);

        &:hover {
            color: var(--background-color-secondary);
            border: 1px solid transparent;
        }
    }
`;
