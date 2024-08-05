import { Login } from '../pages/Login';
import { Dashboard } from '../pages/Dashboard';
import { Settings } from '../pages/Settings';
import { Course } from '../pages/Course';
import { Message } from '../pages/Message';
import { LOGIN_ROUTE, DASHBOARD_ROUTE, COURSE_ROUTE, SETTINGS_ROUTE, MESSAGE_ROUTE } from '../const';

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Login,
    },
] as const;

export const privateRoutes = [
    {
        path: DASHBOARD_ROUTE,
        Component: Dashboard,
    },
    {
        path: COURSE_ROUTE,
        Component: Course,
    },
    {
        path: SETTINGS_ROUTE,
        Component: Settings,
    },
    {
        path: MESSAGE_ROUTE,
        Component: Message,
    },
] as const;
