import { useState } from 'react'
import './AppInformation.css'

function AppInformation (props) {

    const [posts, setPosts] = useState(props.position) 

    function deletePost() {
        setPosts('')
    }

    return(
        <div>
            <div className="content_card">
                <div className="content__body">
                    <strong>
                     {posts.name}
                    </strong>
                    <div>
                     {posts.discription}
                    </div>
                </div>
            
                <div className="content__btn">
                    <button onClick={deletePost}>
                       Удалить
                    </button>
                </div>

            </div>       
        </div>

    )
}

export default AppInformation