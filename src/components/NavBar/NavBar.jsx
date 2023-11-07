import { NavLink } from "react-router-dom"
import "./Navbar.css"

const NavBar = () => {
    return (
        <nav>
            <div>
                <NavLink to="/">Logo</NavLink>
            </div>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/pokemones">Pokemones</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar