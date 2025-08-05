import { ConfigProvider } from 'antd';
import esES from 'antd/locale/es_ES';
import { AuthProvider } from './context/AuthContext';
import { AppRoutes } from './routes';

// Configuración del tema de Ant Design
const theme = {
  token: {
    colorPrimary: '#1890ff',
    borderRadius: 8,
    fontSize: 14,
  },
  components: {
    Button: {
      borderRadius: 8,
    },
    Input: {
      borderRadius: 8,
    },
    Card: {
      borderRadius: 12,
    },
  },
};

function App() {
  return (
    <ConfigProvider locale={esES} theme={theme}>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </ConfigProvider>
  );
}

export default App;
