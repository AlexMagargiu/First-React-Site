import logo from "../images/react-logo.png"

function Navbar(props){
    return(
        <nav className={props.darkMode ? "dark" : ""}>
            <div className="left">
                <img src={logo} className="nav--logo_icon"></img>
                <h1 className="nav--logo_text">ReactFacts</h1>
            </div>
            <div className="toggler">
                <p className="toggler-light">Light</p>
                <div className="toggler--slider" onClick={props.toggleDarkMode}>
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
        </nav>
    )
}

export default Navbar;