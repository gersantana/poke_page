import { NavLink, Link } from "react-router-dom"
import "./Navbar.css"

const NavBar = () => {
    return (
        <nav className="nav_container">
            <div>
                <Link to="/">Logo</Link>
            </div>
            <ul className="links_container">
                <li>
                    <NavLink to="/" >Home</NavLink>
                </li>
                <li>
                    <NavLink to="/pokemones" >Pokemones</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar