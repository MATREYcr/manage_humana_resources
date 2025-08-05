import type { ReactNode } from 'react';
import type { MenuProps } from 'antd';
import { ROUTES } from './constants';

export type MenuItem = Required<MenuProps>['items'][number];

export const createUserMenuItems = (
  navigate: (path: string) => void,
  handleLogout: () => void,
  icons: {
    UserOutlined: ReactNode;
    SettingOutlined: ReactNode;
    LogoutOutlined: ReactNode;
  }
): MenuProps['items'] => [
  {
    key: 'profile',
    icon: icons.UserOutlined,
    label: 'Mi Perfil',
    onClick: () => navigate(ROUTES.PROFILE)
  },
  {
    key: 'settings',
    icon: icons.SettingOutlined,
    label: 'Configuración',
    onClick: () => navigate(ROUTES.SETTINGS)
  },
  {
    type: 'divider',
  },
  {
    key: 'logout',
    icon: icons.LogoutOutlined,
    label: 'Cerrar Sesión',
    danger: true,
    onClick: handleLogout
  },
];

export const createSideMenuItems = (
  navigate: (path: string) => void,
  icons: {
    DashboardOutlined: ReactNode;
    TeamOutlined: ReactNode;
    CalendarOutlined: ReactNode;
    BarChartOutlined: ReactNode;
    SettingOutlined: ReactNode;
  }
): MenuItem[] => [
  {
    key: ROUTES.DASHBOARD,
    icon: icons.DashboardOutlined,
    label: 'Dashboard',
    onClick: () => navigate(ROUTES.DASHBOARD)
  },
  {
    key: ROUTES.EMPLOYEES,
    icon: icons.TeamOutlined,
    label: 'Empleados',
    onClick: () => navigate(ROUTES.EMPLOYEES)
  },
  {
    key: ROUTES.SCHEDULE,
    icon: icons.CalendarOutlined,
    label: 'Horarios',
    onClick: () => navigate(ROUTES.SCHEDULE)
  },
  {
    key: ROUTES.REPORTS,
    icon: icons.BarChartOutlined,
    label: 'Reportes',
    onClick: () => navigate(ROUTES.REPORTS)
  },
  {
    key: ROUTES.SETTINGS,
    icon: icons.SettingOutlined,
    label: 'Configuración',
    onClick: () => navigate(ROUTES.SETTINGS)
  }
];
