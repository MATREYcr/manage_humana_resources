import { forwardRef } from 'react';
import type { ReactNode } from 'react';
import { Input as AntInput, Form } from 'antd';
import type { InputProps as AntInputProps } from 'antd';

export interface InputProps extends Omit<AntInputProps, 'size'> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
  size?: 'small' | 'middle' | 'large';
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  required?: boolean;
}

export const Input = forwardRef<any, InputProps>(({
  label,
  error,
  fullWidth = false,
  size = 'middle',
  leftIcon,
  rightIcon,
  required = false,
  style,
  ...props
}, ref) => {
  const combinedStyle = {
    ...style,
    ...(fullWidth && { width: '100%' }),
  };

  const inputElement = (
    <AntInput
      ref={ref}
      size={size}
      style={combinedStyle}
      status={error ? 'error' : undefined}
      prefix={leftIcon}
      suffix={rightIcon}
      {...props}
    />
  );

  if (label) {
    return (
      <Form.Item
        label={label}
        required={required}
        validateStatus={error ? 'error' : undefined}
        help={error}
        style={{ marginBottom: error ? 24 : 16 }}
      >
        {inputElement}
      </Form.Item>
    );
  }

  return (
    <div style={{ marginBottom: error ? 24 : 0 }}>
      {inputElement}
      {error && (
        <div style={{ 
          color: '#ff4d4f', 
          fontSize: '14px', 
          marginTop: '4px',
          lineHeight: '1.5'
        }}>
          {error}
        </div>
      )}
    </div>
  );
});
