import styled from 'styled-components';

export const HeaderInner = styled.header`
    flex: 0 0 auto;
    display: flex;
    flex-direction: column;
    background: var(--background-color-secondary);
    border-right: 1px solid #e2e1e8;
    margin: 30px 0;
`;

export const HeaderUser = styled.div`
    position: relative;
    margin: auto 18px 0 21px;
    padding-top: 9px;
    display: flex;
    align-items: center;
`;

export const HeaderUserCircle = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: var(--background-color-orange);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 9px;
    line-height: 11px;
    color: var(--background-color-secondary);
`;

export const HeaderUserPhoto = styled.img`
    user-select: none;
    width: 100%;
    max-width: 50px;
    height: 50px;
    border-radius: 30px;
    cursor: pointer;
`;
