import type { ReactNode } from 'react';
import { Button as AntButton } from 'antd';
import type { ButtonProps as AntButtonProps } from 'antd';

export interface ButtonProps extends Omit<AntButtonProps, 'type' | 'size'> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'small' | 'middle' | 'large';
  fullWidth?: boolean;
  buttonType?: 'button' | 'submit' | 'reset';
}

export const Button = ({
  children,
  variant = 'primary',
  size = 'middle',
  fullWidth = false,
  buttonType = 'button',
  className,
  style,
  ...props
}: ButtonProps) => {
  // Mapear nuestras variantes a los tipos de Ant Design
  const getAntType = (): AntButtonProps['type'] => {
    switch (variant) {
      case 'primary':
        return 'primary';
      case 'secondary':
        return 'default';
      case 'outline':
        return 'default';
      case 'ghost':
        return 'text';
      case 'danger':
        return 'primary';
      default:
        return 'primary';
    }
  };

  const combinedStyle = {
    ...style,
    ...(fullWidth && { width: '100%' }),
    ...(variant === 'danger' && { backgroundColor: '#ff4d4f', borderColor: '#ff4d4f' }),
  };

  return (
    <AntButton
      type={getAntType()}
      size={size}
      htmlType={buttonType}
      className={className}
      style={combinedStyle}
      danger={variant === 'danger'}
      ghost={variant === 'outline'}
      {...props}
    >
      {children}
    </AntButton>
  );
};
