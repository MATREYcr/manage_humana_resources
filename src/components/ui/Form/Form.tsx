import type { ReactNode } from 'react';
import { Form as AntForm } from 'antd';
import type { FormProps as AntFormProps } from 'antd';

export interface FormProps extends AntFormProps {
  children: ReactNode;
}

export interface FormItemProps {
  children: ReactNode;
  label?: string;
  name?: string | string[];
  rules?: any[];
  required?: boolean;
  style?: React.CSSProperties;
}

export const Form = ({ children, layout = 'vertical', ...props }: FormProps) => {
  return (
    <AntForm layout={layout} {...props}>
      {children}
    </AntForm>
  );
};

export const FormItem = ({ 
  children, 
  label, 
  name, 
  rules = [], 
  required = false,
  ...props 
}: FormItemProps) => {
  const formRules = required 
    ? [{ required: true, message: `${label || 'Este campo'} es requerido` }, ...rules]
    : rules;

  return (
    <AntForm.Item
      label={label}
      name={name}
      rules={formRules}
      {...props}
    >
      {children}
    </AntForm.Item>
  );
};

// Hook para usar el form
export const useForm = AntForm.useForm;
