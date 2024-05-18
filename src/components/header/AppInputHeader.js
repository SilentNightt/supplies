import { useState } from "react"
import './AppInputHeader.css'
import { SearchOutlined } from '@ant-design/icons';
import { Button } from 'antd';

export default function AppInputHeader() {
    
    const [inputV, setInputV] = useState('')

    function searchInfo() {
        setInputV('')
    }

    return(
            <div className="header__main">
                <input className="header__input"
                type="text" 
                value={inputV} 
                onChange={event => setInputV(event.target.value)}
                />

                <Button className="headerS_button" 
                onClick = {searchInfo} 
                icon={<SearchOutlined />}>
                    Search
                </Button>
            </div>    
    )
}