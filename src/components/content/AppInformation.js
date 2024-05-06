import './AppInformation.css'

export default function AppInformation (props) {
    return(
        <div>
            <div className="content_card">
                <div className="content__body">
                    <strong>
                     {props.position.name}
                    </strong>
                    <div>
                     {props.position.discription}
                    </div>
                </div>
            
                <div className="content__btn">
                    <button>
                       Удалить
                    </button>
                </div>

            </div>       
        </div>

    )
}