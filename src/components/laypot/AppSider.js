import React, { useState } from 'react';
import { Layout } from 'antd';
import AppSiderContent from '../sider/AppSiderContent';
import Modal from '../model/Modal';
import AppCheckbox from '../sider/AppCheckbox';
import './Sider.css';

const { Sider } = Layout;

const filterNames = {
  filterChair: 'Модель А',
  filterTaible: 'Модель В',
  filterDSP: 'Модель С',
  filterTools: 'Модель D',
};

const siderStyle = {
  textAlign: 'center',
  height: '100vh',
  color: '#fff',
  backgroundColor: '#1677ff',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
};

export default function AppSider() {
  const [modalActive, setModalActive] = useState(false);

  return (
    <Sider style={siderStyle}>
      <div>
        <button className="sider-button" onClick={() => setModalActive(true)}>
          Каллендарь
        </button>
        <Modal active={modalActive} setActive={setModalActive}>
          <AppSiderContent />
        </Modal>
        <div className="filter">
          {Object.keys(filterNames).map(key => (
            <div className="filter-item" key={key}>
              <AppCheckbox name={filterNames[key]} />
            </div>
          ))}
        </div>
      </div>
    </Sider>
  );
}