import '../../styles/components/layout/Nav.css'

import { NavLink } from "react-router-dom";

const Nav = (props) => {
    return (
        <nav>
            <ul>
                <li><NavLink activeClassName="activo" exact to="/" >Home</NavLink></li>
                <li><NavLink activeClassName="activo" exact to="/nosotros" >Nosotros</NavLink></li>
                <li><NavLink activeClassName="activo" exact to="/laboratorio" >Laboratorio</NavLink></li>
                <li><NavLink activeClassName="activo" exact to="/trabajos" >Trabajos</NavLink></li>
                <li><NavLink activeClassName="activo" exact to="/contacto" >Contacto</NavLink></li>
            </ul>
        </nav>
    )
}
export default Nav;