import type { ReactNode } from 'react';
import { Card as AntCard } from 'antd';
import type { CardProps as AntCardProps } from 'antd';

export interface CardProps extends Omit<AntCardProps, 'size'> {
  children: ReactNode;
  variant?: 'default' | 'elevated' | 'outlined' | 'ghost';
  padding?: 'none' | 'small' | 'default' | 'large';
  hoverable?: boolean;
}

export const Card = ({
  children,
  variant = 'default',
  padding = 'default',
  hoverable = false,
  style,
  bodyStyle,
  ...props
}: CardProps) => {
  // Configurar el bodyStyle basado en el padding
  const getPaddingStyle = () => {
    switch (padding) {
      case 'none':
        return { padding: 0 };
      case 'small':
        return { padding: '12px' };
      case 'large':
        return { padding: '32px' };
      default:
        return { padding: '24px' };
    }
  };

  // Configurar el estilo basado en la variante
  const getVariantStyle = () => {
    switch (variant) {
      case 'elevated':
        return {
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          border: '1px solid #f0f0f0',
        };
      case 'outlined':
        return {
          border: '2px solid #d9d9d9',
          boxShadow: 'none',
        };
      case 'ghost':
        return {
          backgroundColor: 'transparent',
          border: 'none',
          boxShadow: 'none',
        };
      default:
        return {};
    }
  };

  const combinedStyle = {
    ...getVariantStyle(),
    ...style,
  };

  const combinedBodyStyle = {
    ...getPaddingStyle(),
    ...bodyStyle,
  };

  return (
    <AntCard
      hoverable={hoverable}
      style={combinedStyle}
      bodyStyle={combinedBodyStyle}
      {...props}
    >
      {children}
    </AntCard>
  );
};
