import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Divider, Space, message, Row, Col, Input as AntInput } from 'antd';
import { 
  UserOutlined, 
  MailOutlined, 
  LockOutlined, 
  EyeInvisibleOutlined, 
  EyeTwoTone,
  PhoneOutlined,
  TeamOutlined
} from '@ant-design/icons';
import { Button, Input, Card, Form, FormItem, useForm } from '../components/ui';
import { useAuth } from '../context/AuthContext';

const { Title, Text, Link } = Typography;

interface RegisterFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

export const SignUpPage = () => {
  const [form] = useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { register } = useAuth();

  const handleSubmit = async (values: RegisterFormData) => {
    if (values.password !== values.confirmPassword) {
      message.error('Las contraseñas no coinciden');
      return;
    }

    setLoading(true);
    try {
      await register(values);
      message.success('¡Registro exitoso! Bienvenido al sistema');
      navigate('/dashboard');
    } catch (error) {
      message.error('Error al registrar usuario');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '20px'
    }}>
      <Card 
        style={{ 
          width: '100%', 
          maxWidth: 500,
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
        }}
        padding="large"
      >
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: 24 }}>
            <Title level={2} style={{ marginBottom: 8, color: '#1890ff' }}>
              Crear Cuenta
            </Title>
            <Text type="secondary">
              Únete a nuestro sistema de gestión
            </Text>
          </div>

          {/* Formulario */}
          <Form
            form={form}
            onFinish={handleSubmit}
            autoComplete="off"
          >
            {/* Nombres */}
            <Row gutter={16}>
              <Col span={12}>
                <FormItem
                  name="firstName"
                  rules={[
                    { required: true, message: 'Ingresa tu nombre' },
                    { min: 2, message: 'Mínimo 2 caracteres' }
                  ]}
                >
                  <Input
                    size="large"
                    placeholder="Nombre"
                    leftIcon={<UserOutlined />}
                    fullWidth
                  />
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem
                  name="lastName"
                  rules={[
                    { required: true, message: 'Ingresa tu apellido' },
                    { min: 2, message: 'Mínimo 2 caracteres' }
                  ]}
                >
                  <Input
                    size="large"
                    placeholder="Apellido"
                    leftIcon={<TeamOutlined />}
                    fullWidth
                  />
                </FormItem>
              </Col>
            </Row>

            {/* Email */}
            <FormItem
              name="email"
              rules={[
                { required: true, message: 'Por favor ingresa tu email' },
                { type: 'email', message: 'Ingresa un email válido' }
              ]}
            >
              <Input
                size="large"
                placeholder="Correo electrónico"
                leftIcon={<MailOutlined />}
                fullWidth
              />
            </FormItem>

            {/* Teléfono */}
            <FormItem
              name="phone"
              rules={[
                { required: true, message: 'Ingresa tu teléfono' },
                { pattern: /^[0-9\-\+\s\(\)]+$/, message: 'Formato de teléfono inválido' }
              ]}
            >
              <Input
                size="large"
                placeholder="Teléfono"
                leftIcon={<PhoneOutlined />}
                fullWidth
              />
            </FormItem>

            {/* Contraseñas */}
            <FormItem
              name="password"
              rules={[
                { required: true, message: 'Por favor ingresa tu contraseña' },
                { min: 8, message: 'La contraseña debe tener al menos 8 caracteres' },
                { 
                  pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, 
                  message: 'Debe contener mayúsculas, minúsculas y números' 
                }
              ]}
            >
              <AntInput.Password
                size="large"
                placeholder="Contraseña"
                prefix={<LockOutlined />}
                iconRender={(visible: boolean) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                style={{ width: '100%' }}
              />
            </FormItem>

            <FormItem
              name="confirmPassword"
              rules={[
                { required: true, message: 'Confirma tu contraseña' },
                ({ getFieldValue }: any) => ({
                  validator(_: any, value: any) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('Las contraseñas no coinciden'));
                  },
                }),
              ]}
            >
              <AntInput.Password
                size="large"
                placeholder="Confirmar contraseña"
                prefix={<LockOutlined />}
                iconRender={(visible: boolean) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                style={{ width: '100%' }}
              />
            </FormItem>

            <FormItem>
              <Button
                variant="primary"
                size="large"
                fullWidth
                loading={loading}
                buttonType="submit"
              >
                Crear Cuenta
              </Button>
            </FormItem>
          </Form>

          <Divider />

          {/* Enlaces adicionales */}
          <div style={{ textAlign: 'center' }}>
            <Text style={{ fontSize: '14px' }}>
              ¿Ya tienes cuenta?{' '}
              <Link href="/signin">
                Inicia sesión aquí
              </Link>
            </Text>
          </div>
        </Space>
      </Card>
    </div>
  );
};
