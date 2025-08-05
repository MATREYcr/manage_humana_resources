export const ROUTES = {
  // Rutas públicas
  SIGNIN: '/signin',
  SIGNUP: '/signup',
  
  // Rutas privadas
  DASHBOARD: '/dashboard',
  EMPLOYEES: '/employees',
  SCHEDULE: '/schedule',
  REPORTS: '/reports',
  SETTINGS: '/settings',
  PROFILE: '/profile',
  NOTIFICATIONS: '/notifications',
  
  // Rutas especiales
  ROOT: '/',
  FALLBACK: '*'
} as const;

export type RouteKeys = typeof ROUTES[keyof typeof ROUTES];
