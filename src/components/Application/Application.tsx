import { Redirect, Route, Switch } from 'react-router-dom';
import { Header } from '../Header';
import { DASHBOARD_ROUTE, LOGIN_ROUTE } from '../../const';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { privateRoutes, publicRoutes } from '../../routes';
import { IUserState } from '../../store/types/user';
import { Container, Main, AuthorizationContainer } from './style';

export const Application: React.FC = () => {
    const { isAuth } = useTypedSelector<IUserState>(state => state.user);
    if (isAuth) {
        return (
            <Container>
                <Header />
                <Main>
                    <Switch>
                        {privateRoutes.map(({ path, Component }) => (
                            <Route exact key={path} path={path} component={Component} />
                        ))}
                        <Redirect to={DASHBOARD_ROUTE} />
                    </Switch>
                </Main>
            </Container>
        );
    }
    return (
        <AuthorizationContainer>
            <Switch>
                {publicRoutes.map(({ path, Component }) => (
                    <Route exact key={path} path={path} component={Component} />
                ))}
                <Redirect to={LOGIN_ROUTE} />
            </Switch>
        </AuthorizationContainer>
    );
};
