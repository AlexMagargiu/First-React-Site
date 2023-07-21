import logo from "../images/react-logo.png"

function Navbar(){
    return(
        <nav className="header">
            <div className="left">
                <img src={logo} alt="React logo"></img>
                <h1>ReactFacts</h1>
            </div>
            <p>React Course - Project 1</p>
        </nav>
    )
}

export default Navbar;