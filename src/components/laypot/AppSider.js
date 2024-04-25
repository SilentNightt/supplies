import React from 'react';
import { Layout } from 'antd';

const { Sider } = Layout;

const siderStyle = {
    textAlign: 'center',
    height: '100vh',
    color: '#fff',
    backgroundColor: '#1677ff',
  };

export default function () {
    return(
      <Sider width="20%" style={siderStyle}>
        Sider
      </Sider>
    )
}