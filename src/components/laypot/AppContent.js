import React, { useState } from 'react';
import { Flex, Layout } from 'antd';
import AppInformation from '../content/AppInformation';


const { Content } = Layout;

const contentStyle = {
    width: 'calc(100vh-60px)',
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#0958d9',
  };

export default function AppContent() {

  const [position, setPosition] = useState([
    {id: 1, name: 'R1000', discription: "Have smth"},
    {id: 2, name: 'R1012', discription: "Have nothing"},
    {id: 3, name: 'R10321', discription: "Have smth"},
  ])

    return (<Content style={contentStyle}>
        {position.map(card => 
          <AppInformation position = {card} key = {card.id}/>)
        }
        
    </Content>)
}