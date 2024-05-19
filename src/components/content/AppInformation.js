import './AppInformation.css'

function AppInformation (props) {

    const { position, onDelete } = props;

    const handleDelete = () => {
        onDelete(position.id);
    };

    return(
    <div className="content_card">
                <div className="content__body">
                    <strong className="content__title">
                        {position.name}
                    </strong>
                    <div className="content__description">
                        {position.discription}
                    </div>
                </div>
                <div className="content__btn">
                    <button onClick={handleDelete}>
                        Удалить
                    </button>
                </div>
            </div>

    )
}

export default AppInformation