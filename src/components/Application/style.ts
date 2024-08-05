import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 1920px;
    margin: 0 auto;
    display: flex;
`;

export const AuthorizationContainer = styled.main`
    width: 100%;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
`;

export const Main = styled.main`
    flex: 1 0 auto;
    padding: 0 50px 0 70px;
    min-height: 100vh;
`;
