import { Routes, Route } from 'react-router-dom';
import { 
  DashboardPage, 
  EmployeesPage, 
  SettingsPage 
} from '../pages';
import { ROUTES } from './constants';

// Componentes temporales para rutas en desarrollo
const ComingSoonPage = ({ title }: { title: string }) => (
  <div style={{ 
    padding: '24px', 
    textAlign: 'center',
    background: '#fff',
    margin: '24px',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
  }}>
    <h2 style={{ color: '#1890ff', marginBottom: '16px' }}>{title}</h2>
    <p style={{ color: '#666' }}>Esta página estará disponible próximamente</p>
  </div>
);

export const PrivateRoutes = () => {
  return (
    <Routes>
      {/* Rutas principales del dashboard */}
      <Route path={ROUTES.DASHBOARD} element={<DashboardPage />} />
      <Route path={ROUTES.EMPLOYEES} element={<EmployeesPage />} />
      <Route path={ROUTES.SETTINGS} element={<SettingsPage />} />
      
      {/* Rutas temporales */}
      <Route path={ROUTES.SCHEDULE} element={<ComingSoonPage title="Gestión de Horarios" />} />
      <Route path={ROUTES.REPORTS} element={<ComingSoonPage title="Reportes y Análisis" />} />
      <Route path={ROUTES.PROFILE} element={<ComingSoonPage title="Mi Perfil" />} />
      <Route path={ROUTES.NOTIFICATIONS} element={<ComingSoonPage title="Notificaciones" />} />
    </Routes>
  );
};
