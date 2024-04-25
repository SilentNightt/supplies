import React from 'react';
import { Flex, Layout } from 'antd';

const { Content } = Layout;

const contentStyle = {
    width: 'calc(100vh-60px)',
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#0958d9',
  };

export default function AppContent() {
    return (<Content style={contentStyle}>Content</Content>)
}