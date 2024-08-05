import CourseIcon from '../assets/header/icon/course-icon.svg';
import DashboardIcon from '../assets/header/icon/dashboard-icon.svg';
import MessageIcon from '../assets/header/icon/Message-icon.svg';
import SettingsIcon from '../assets/header/icon/settings-icon.svg';
import GoogleIcon from '../assets/continueWith/google-icon.svg';
import VKIcon from '../assets/continueWith/vk-icon.svg';
import AppleIcon from '../assets/continueWith/apple-icon.svg';

export const BASENAME_PATH = '/budget';
export const LOGIN_ROUTE = '/login';
export const DASHBOARD_ROUTE = '/dashboard';
export const SETTINGS_ROUTE = '/settings';
export const MESSAGE_ROUTE = '/message';
export const COURSE_ROUTE = '/course';

export const NAVIGATION_ITEMS = [
    {
        icon: DashboardIcon,
        title: 'Dashboard',
    },
    {
        icon: CourseIcon,
        title: 'Course',
    },
    {
        icon: SettingsIcon,
        title: 'Settings',
    },
    {
        icon: MessageIcon,
        title: 'Message',
    },
] as const;

export const CONTINUE_WITH_LINKS = [
    {
        icon: GoogleIcon,
        link: '/#',
    },
    {
        icon: VKIcon,
        link: '/#',
    },
    {
        icon: AppleIcon,
        link: '/#',
    },
] as const;
