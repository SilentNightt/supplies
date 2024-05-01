import React, { useState } from 'react';
import { Layout } from 'antd';
import AppSiderContent from '../sider/AppSiderContent';
import Modal from '../model/Modal';
import AppCheckbox from '../sider/AppCheckbox';
import './Sider.css'

const { Sider } = Layout;

const filterNames = {
  filterChair: 'Стул',
  filterTaible: 'Стол',
  filterDSP: 'ДСП',
  filterTools: 'Стройматериалы',
}

const siderStyle = {
    textAlign: 'center',
    height: '100vh',
    color: '#fff',
    backgroundColor: '#1677ff',
  };

export default function () {

  const [modalAcrive, setModalAcrive] = useState(false)

    return(
      <Sider style={siderStyle}>
        <button onClick={() => setModalAcrive(true)}>Каллендарь</button>
        <Modal active={modalAcrive} setActive={setModalAcrive}>
          <AppSiderContent/>
        </Modal>
        <div className='filter'>
          <div> 
              <AppCheckbox name={filterNames.filterChair}/>
            </div>
            <div>
              <AppCheckbox name={filterNames.filterTaible}/>
            </div>
            <div>
              <AppCheckbox name={filterNames.filterDSP}/>
            </div>
            <div>
              <AppCheckbox name={filterNames.filterTools}/>
            </div>
        </div>
      </Sider>
    )
}