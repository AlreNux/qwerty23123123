import styled from 'styled-components';

export const SearchInput = styled.input`
    width: 100%;
    margin-right: 10px;
    background: inherit;
    font-size: 16px;
    color: var(--text-color);

    &::placeholder {
        color: var(--background-color-not-active);
    }
`;
