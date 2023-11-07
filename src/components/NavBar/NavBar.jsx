import { NavLink, Link } from "react-router-dom"
import pokeball from "../../assets/pokeball.png"
import "./Navbar.css"

const NavBar = () => {
    return (
        <nav className="nav_container">
            <div className="logo_container">
                <Link to="/"><img src={pokeball} alt="poke" /></Link>
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