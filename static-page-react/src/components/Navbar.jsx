import logo from '../assets/react.svg';

function Navbar() {
    return (
        <header>
            <nav>
                <img className="header-logo" src={logo} alt="React logo" />
                <span className="header-title">ReactFacts</span>
            </nav>
        </header>
    )
}

export default Navbar; 