import './AppHeaderButton.css'

function AppHeaderButton({children, ...props}) {
    return(
        <button {...props} className="main-button">
            {children}
        </button>
    )
}

export default AppHeaderButton