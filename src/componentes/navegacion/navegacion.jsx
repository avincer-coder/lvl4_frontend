import { NavLink } from "react-router-dom";

const Navegacion = () => {

    return(
        <nav>
            <h2>Administración</h2>
            <h3>General y seguridad</h3>
            <ul>
                <li><NavLink to='/rolls'>Roles</NavLink></li>
                <li><NavLink to='/user'>Usuarios</NavLink></li>
                <li><NavLink to='/bitacoras'>Bitacoras</NavLink></li>
                <li><NavLink to='/paginas'>Paginas</NavLink></li>
            </ul>
        </nav>
    );
}
export default Navegacion;