import type { ReactNode } from 'react';
import { Layout as AntLayout } from 'antd';
import type { LayoutProps as AntLayoutProps } from 'antd';

const { Header, Content, Footer, Sider } = AntLayout;

export interface LayoutProps extends AntLayoutProps {
  children: ReactNode;
}

export interface HeaderProps {
  children: ReactNode;
  style?: React.CSSProperties;
}

export interface ContentProps {
  children: ReactNode;
  style?: React.CSSProperties;
}

export interface FooterProps {
  children: ReactNode;
  style?: React.CSSProperties;
}

export interface SiderProps {
  children: ReactNode;
  collapsed?: boolean;
  width?: number | string;
  style?: React.CSSProperties;
}

export const Layout = ({ children, ...props }: LayoutProps) => {
  return (
    <AntLayout style={{ minHeight: '100vh' }} {...props}>
      {children}
    </AntLayout>
  );
};

export const LayoutHeader = ({ children, style, ...props }: HeaderProps) => {
  return (
    <Header
      style={{
        background: '#fff',
        padding: '0 24px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.09)',
        ...style,
      }}
      {...props}
    >
      {children}
    </Header>
  );
};

export const LayoutContent = ({ children, style, ...props }: ContentProps) => {
  return (
    <Content
      style={{
        margin: '24px 16px',
        padding: 24,
        background: '#fff',
        borderRadius: 8,
        ...style,
      }}
      {...props}
    >
      {children}
    </Content>
  );
};

export const LayoutFooter = ({ children, style, ...props }: FooterProps) => {
  return (
    <Footer
      style={{
        textAlign: 'center',
        background: '#f0f2f5',
        ...style,
      }}
      {...props}
    >
      {children}
    </Footer>
  );
};

export const LayoutSider = ({ children, style, ...props }: SiderProps) => {
  return (
    <Sider
      style={{
        background: '#fff',
        ...style,
      }}
      {...props}
    >
      {children}
    </Sider>
  );
};
