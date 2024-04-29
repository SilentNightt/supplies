import { useState } from "react"

export default function AppInputHeader() {
    
    const [inputV, setInputV] = useState('Поиск')

    return(
            <div>
                <input 
                type="text" 
                value={inputV} 
                onChange={event => setInputV(event.target.value)}
                />
                <button onClick={() => console.log(inputV)}>Поиск</button>
            </div>    
    )
}