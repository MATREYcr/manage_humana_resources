import { useState } from 'react';
import { 
  Typography, 
  Row, 
  Col, 
  Statistic, 
  Space, 
  Table,
  Tag,
  Progress
} from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { 
  UserOutlined, 
  TeamOutlined, 
  CalendarOutlined, 
  DashboardOutlined,
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  SettingOutlined
} from '@ant-design/icons';
import { 
  Card, 
  Button 
} from '../components/ui';

const { Title } = Typography;

interface Employee {
  key: string;
  name: string;
  position: string;
  department: string;
  status: 'active' | 'inactive' | 'vacation';
  performance: number;
}

const mockEmployees: Employee[] = [
  {
    key: '1',
    name: 'Juan Pérez',
    position: 'Desarrollador Senior',
    department: 'Tecnología',
    status: 'active',
    performance: 85
  },
  {
    key: '2',
    name: 'María García',
    position: 'Diseñadora UX',
    department: 'Diseño',
    status: 'active',
    performance: 92
  },
  {
    key: '3',
    name: 'Carlos López',
    position: 'Gerente de Proyecto',
    department: 'Gestión',
    status: 'vacation',
    performance: 78
  },
  {
    key: '4',
    name: 'Ana Martínez',
    position: 'Analista de Datos',
    department: 'Tecnología',
    status: 'active',
    performance: 88
  },
];

export const DashboardPage = () => {
  const [employees] = useState<Employee[]>(mockEmployees);

  const columns: ColumnsType<Employee> = [
    {
      title: 'Empleado',
      dataIndex: 'name',
      key: 'name',
      render: (text: string) => (
        <Space>
          <UserOutlined style={{ fontSize: '16px', color: '#1890ff' }} />
          <span style={{ fontWeight: 500 }}>{text}</span>
        </Space>
      ),
    },
    {
      title: 'Posición',
      dataIndex: 'position',
      key: 'position',
    },
    {
      title: 'Departamento',
      dataIndex: 'department',
      key: 'department',
    },
    {
      title: 'Estado',
      dataIndex: 'status',
      key: 'status',
      render: (status: Employee['status']) => {
        const statusConfig = {
          active: { color: 'green', text: 'Activo' },
          inactive: { color: 'red', text: 'Inactivo' },
          vacation: { color: 'orange', text: 'Vacaciones' },
        };
        return (
          <Tag color={statusConfig[status].color}>
            {statusConfig[status].text}
          </Tag>
        );
      },
    },
    {
      title: 'Rendimiento',
      dataIndex: 'performance',
      key: 'performance',
      render: (performance: number) => (
        <Progress 
          percent={performance} 
          size="small" 
          status={performance >= 80 ? 'success' : performance >= 60 ? 'normal' : 'exception'}
        />
      ),
    },
    {
      title: 'Acciones',
      key: 'actions',
      render: () => (
        <Space>
          <Button size="small" variant="ghost">
            <EditOutlined />
          </Button>
          <Button size="small" variant="ghost">
            <DeleteOutlined />
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div style={{ padding: '24px' }}>
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        {/* Métricas principales */}
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={6}>
            <Card hoverable>
              <Statistic
                title="Total Empleados"
                value={employees.length}
                prefix={<TeamOutlined style={{ color: '#1890ff' }} />}
                valueStyle={{ color: '#1890ff' }}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Card hoverable>
              <Statistic
                title="Empleados Activos"
                value={employees.filter(emp => emp.status === 'active').length}
                prefix={<UserOutlined style={{ color: '#52c41a' }} />}
                valueStyle={{ color: '#52c41a' }}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Card hoverable>
              <Statistic
                title="En Vacaciones"
                value={employees.filter(emp => emp.status === 'vacation').length}
                prefix={<CalendarOutlined style={{ color: '#faad14' }} />}
                valueStyle={{ color: '#faad14' }}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Card hoverable>
              <Statistic
                title="Rendimiento Promedio"
                value={Math.round(employees.reduce((acc, emp) => acc + emp.performance, 0) / employees.length)}
                suffix="%"
                prefix={<DashboardOutlined style={{ color: '#722ed1' }} />}
                valueStyle={{ color: '#722ed1' }}
              />
            </Card>
          </Col>
        </Row>

        {/* Tabla de empleados */}
        <Card 
          title={
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Title level={4} style={{ margin: 0 }}>
                Gestión de Empleados
              </Title>
              <Button variant="primary">
                <PlusOutlined /> Nuevo Empleado
              </Button>
            </div>
          }
        >
          <Table
            columns={columns}
            dataSource={employees}
            pagination={{
              pageSize: 10,
              showSizeChanger: true,
              showQuickJumper: true,
              showTotal: (total, range) => 
                `${range[0]}-${range[1]} de ${total} empleados`,
            }}
            scroll={{ x: 800 }}
          />
        </Card>

        {/* Gráficos de rendimiento por departamento */}
        <Row gutter={[16, 16]}>
          <Col xs={24} lg={12}>
            <Card 
              title="Distribución por Departamento"
              hoverable
            >
              <Space direction="vertical" style={{ width: '100%' }}>
                {['Tecnología', 'Diseño', 'Gestión'].map(dept => {
                  const deptCount = employees.filter(emp => emp.department === dept).length;
                  const percentage = Math.round((deptCount / employees.length) * 100);
                  return (
                    <div key={dept}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                        <span>{dept}</span>
                        <span style={{ fontWeight: 500 }}>{deptCount} empleados</span>
                      </div>
                      <Progress percent={percentage} showInfo={false} />
                    </div>
                  );
                })}
              </Space>
            </Card>
          </Col>
          
          <Col xs={24} lg={12}>
            <Card 
              title="Acciones Rápidas"
              hoverable
            >
              <Space direction="vertical" style={{ width: '100%' }} size="middle">
                <Button variant="outline" fullWidth size="large">
                  <UserOutlined /> Registrar Nuevo Empleado
                </Button>
                <Button variant="outline" fullWidth size="large">
                  <CalendarOutlined /> Programar Evaluación
                </Button>
                <Button variant="outline" fullWidth size="large">
                  <TeamOutlined /> Generar Reporte
                </Button>
                <Button variant="outline" fullWidth size="large">
                  <SettingOutlined /> Configurar Sistema
                </Button>
              </Space>
            </Card>
          </Col>
        </Row>
      </Space>
    </div>
  );
};
