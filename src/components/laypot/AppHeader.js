import React from 'react';
import { Flex, Layout } from 'antd';

const { Header } = Layout;

const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    height: 80,
    backgroundColor: '#4096ff',
  };
  

export default function AppHeader() {
    return(
        <Header style={headerStyle}>Header</Header>
    )
}