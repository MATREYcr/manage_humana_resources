import { Typography, Card as AntCard } from 'antd';
import { TeamOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

export const EmployeesPage = () => {
  return (
    <div style={{ padding: '24px' }}>
      <AntCard>
        <div style={{ textAlign: 'center', padding: '40px 0' }}>
          <TeamOutlined style={{ fontSize: '64px', color: '#1890ff', marginBottom: '16px' }} />
          <Title level={2}>Gestión de Empleados</Title>
          <Paragraph type="secondary">
            Esta página estará disponible próximamente. Aquí podrás gestionar toda la información de los empleados.
          </Paragraph>
        </div>
      </AntCard>
    </div>
  );
};
