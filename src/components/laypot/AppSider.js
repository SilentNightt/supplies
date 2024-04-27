import React, { useState } from 'react';
import { Layout } from 'antd';
import AppSiderContent from '../sider/AppSiderContent';
import Modal from '../model/Modal';

const { Sider } = Layout;

const siderStyle = {
    textAlign: 'center',
    height: '100vh',
    color: '#fff',
    backgroundColor: '#1677ff',
  };

export default function () {

  const [modalAcrive, setModalAcrive] = useState(true)

    return(
      <Sider style={siderStyle}>
        <button onClick={() => setModalAcrive(true)}>Каллендарь</button>
        <Modal active={modalAcrive} setActive={setModalAcrive}>
          <AppSiderContent/>
        </Modal>
      </Sider>
    )
}