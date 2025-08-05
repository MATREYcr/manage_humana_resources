# Sistema de Rutas - HR Management

## 📁 Estructura de Rutas

La aplicación ahora tiene un sistema de rutas completamente organizado y separado:

```
src/routes/
├── constants.ts          # Constantes de rutas centralizadas
├── menuItems.ts          # Configuración de menús
├── AppRoutes.tsx         # Configuración principal de rutas
├── PublicRoutes.tsx      # Rutas públicas (sin autenticación)
├── PrivateRoutes.tsx     # Rutas privadas (con autenticación)
└── index.ts             # Exportaciones centralizadas
```

## 🛣️ Rutas Disponibles

### **Rutas Públicas**
- `/signin` - Página de inicio de sesión
- `/signup` - Página de registro
- `/` - Redirige a `/signin`

### **Rutas Privadas (Requieren Autenticación)**
- `/dashboard` - Panel principal
- `/employees` - Gestión de empleados
- `/schedule` - Gestión de horarios (próximamente)
- `/reports` - Reportes y análisis (próximamente)
- `/settings` - Configuración del sistema
- `/profile` - Perfil de usuario (próximamente)
- `/notifications` - Notificaciones (próximamente)

## 🔧 Componentes de Rutas

### **AppRoutes**
Componente principal que configura el Router y estructura general de rutas.

### **ProtectedRoute**
Componente que maneja la protección de rutas basada en autenticación:
- `requireAuth={true}` - Requiere autenticación (por defecto)
- `requireAuth={false}` - Rutas públicas

### **MainLayout**
Layout principal para rutas autenticadas con:
- Sidebar navegación
- Header con usuario y notificaciones
- Área de contenido principal

## 📋 Menús

### **Sidebar Menu**
Navegación principal con iconos y labels:
- Dashboard
- Empleados
- Horarios
- Reportes
- Configuración

### **User Menu**
Menú del usuario en el header:
- Mi Perfil
- Configuración
- Cerrar Sesión

## 🚀 Uso

### **Navegación Programática**
```tsx
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../routes';

const navigate = useNavigate();
navigate(ROUTES.DASHBOARD);
```

### **Agregar Nueva Ruta**
1. Agregar constante en `constants.ts`
2. Crear la página en `src/pages/`
3. Agregar la ruta en `PrivateRoutes.tsx` o `PublicRoutes.tsx`
4. Opcional: Agregar al menú en `menuItems.ts`

### **Ejemplo de Nueva Ruta**
```tsx
// 1. En constants.ts
export const ROUTES = {
  // ... otras rutas
  NEW_PAGE: '/new-page'
} as const;

// 2. En PrivateRoutes.tsx
<Route path={ROUTES.NEW_PAGE} element={<NewPage />} />

// 3. En menuItems.ts (opcional)
{
  key: ROUTES.NEW_PAGE,
  icon: icons.SomeIcon,
  label: 'Nueva Página',
  onClick: () => navigate(ROUTES.NEW_PAGE)
}
```

## 🔐 Autenticación

El sistema de rutas está integrado con el contexto de autenticación:
- Las rutas públicas redirigen al dashboard si el usuario está autenticado
- Las rutas privadas redirigen al signin si el usuario no está autenticado
- Loading state automático durante verificación de autenticación

## 🎨 Ventajas de esta Estructura

✅ **Separación de responsabilidades** - Cada archivo tiene un propósito específico
✅ **Constantes centralizadas** - Evita errores de tipeo en URLs
✅ **Reutilización** - Menús y configuraciones reutilizables
✅ **Mantenibilidad** - Fácil agregar/modificar rutas
✅ **TypeScript** - Tipado completo para seguridad
✅ **Escalabilidad** - Estructura preparada para crecimiento
