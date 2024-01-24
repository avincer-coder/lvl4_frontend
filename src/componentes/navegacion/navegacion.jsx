import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUserGear, faChalkboardUser, faListUl, faLink} from '@fortawesome/free-solid-svg-icons'

const Navegacion = () => {

    return(
        <nav className="bg-slate-800 text-slate-50 h-full w-[250px] mb-[30px]">
            <h2 className="text-lg border-b-2 border-solid border-slate-50 flex justify-center items-center py-4">Administración</h2>
            <h3 className="flex justify-center items-center py-4">General y seguridad</h3>
            <ul className="flex flex-col justify-around	 pl-12  h-[200px]">
                <li><NavLink to='/rolls'> <FontAwesomeIcon icon={faUserGear} className="pr-2" />Roles</NavLink></li>
                <li><NavLink to='/user'> <FontAwesomeIcon icon={faChalkboardUser} className="pr-1"/> Usuarios</NavLink></li>
                <li><NavLink to='/bitacoras'> <FontAwesomeIcon icon={faListUl} className="pr-3"/>Bitacoras</NavLink></li>
                <li><NavLink to='/paginas'> <FontAwesomeIcon icon={faLink} className="pr-2"/>Paginas</NavLink></li>
            </ul>
        </nav>
    );
}
export default Navegacion;