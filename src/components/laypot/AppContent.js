import React, { useState } from 'react';
import { Flex, Layout } from 'antd';
import AppInformation from '../content/AppInformation';
import AppHeaderInput from '../UI/AppHeaderInput';
import AppHeaderButton from '../UI/AppHeaderButton';


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
    {id: 4, name: 'R1001', discription: "Have smth"},
  ])

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  function addNewPosition(e) {
    e.preventDefault()
    let newPosition = {
      id: Date.now(),
      name: title,
      discription: content,
    }

    setPosition([...position, newPosition])
    setTitle('')
    setContent('')
  }

    return (<Content style={contentStyle}>
        <AppHeaderInput 
        type = "text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Название поста"/>
        <AppHeaderInput 
        type = "text"
        value={content}
        onChange={e => setContent(e.target.value)}
        placeholder="Содержимое"/>
        <AppHeaderButton onClick={addNewPosition}>Создать пост</AppHeaderButton>
        
        {position.map(card => 
          <AppInformation position = {card} key = {card.id}/>)
        }
        
    </Content>)
}