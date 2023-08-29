import logo from "../../utils/pokemonlogo.png"
import { Link } from "react-router-dom"
import styled from "./navbar.module.css"


function Navbar(){


    return (
        <nav className={styled.navContainer}>
            <img src={logo} alt="pokemon logo"/>
            <div>
            <Link to="/home">Home</Link>
            <Link to="/pokemon/create">Create Pókemon</Link>
            </div>
        </nav>
    )
}


export default Navbar