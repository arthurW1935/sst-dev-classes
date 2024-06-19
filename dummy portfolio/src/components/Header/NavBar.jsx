import './NavBar.css';

function NavBar() {
    return (
        <nav className="navbar">
            <ul>
                <li className="nav-item"><a href="#">Home</a></li>
                <li className="nav-item"><a href="#">About</a></li>
                <li className="nav-item"><a href="#">Projects</a></li>
                <li className="nav-item"><a href="#">Contact</a></li>
            </ul>
        </nav>
    )
}

export default NavBar;