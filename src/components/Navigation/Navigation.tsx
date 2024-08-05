import { NavLink } from 'react-router-dom';
import { NAVIGATION_ITEMS } from '../../const';
import { NavigationList, NavigationItem, NavigationItemActive, NavigationIcon } from './style';

export const Navigation: React.FC = () => (
    <nav>
        <NavigationList>
            {NAVIGATION_ITEMS.map(item => (
                <NavigationItem key={item.title}>
                    <NavLink exact to={`/${item.title}`} activeStyle={NavigationItemActive}>
                        <NavigationIcon src={`${item.icon}`} />
                    </NavLink>
                </NavigationItem>
            ))}
        </NavigationList>
    </nav>
);
