import { Routes, Route, Navigate } from 'react-router-dom';
import { ProtectedRoute } from '../components/ProtectedRoute';
import { SignInPage, SignUpPage } from '../pages';
import { ROUTES } from './constants';

export const PublicRoutes = () => {
  return (
    <Routes>
      {/* Ruta inicial redirige al signin */}
      <Route path={ROUTES.ROOT} element={<Navigate to={ROUTES.SIGNIN} replace />} />
      
      {/* Rutas públicas (no requieren autenticación) */}
      <Route path={ROUTES.SIGNIN} element={
        <ProtectedRoute requireAuth={false}>
          <SignInPage />
        </ProtectedRoute>
      } />
      
      <Route path={ROUTES.SIGNUP} element={
        <ProtectedRoute requireAuth={false}>
          <SignUpPage />
        </ProtectedRoute>
      } />
      
      {/* Ruta 404 para rutas públicas - redirige al signin */}
      <Route path={ROUTES.FALLBACK} element={<Navigate to={ROUTES.SIGNIN} replace />} />
    </Routes>
  );
};
