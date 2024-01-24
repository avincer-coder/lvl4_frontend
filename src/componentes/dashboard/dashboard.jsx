import Navegacion from "../navegacion/navegacion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSmileBeam, faBars, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";
const Dashboard = () => {
    return(
    <main className='flex bg-gray-300 border-red-500 h-screen	'>
        <section >
            <Navegacion className="bg-blue-600 h-full" />
        </section>
        <section className='flex flex-col items-center w-full'>
        <section className='border-b-[1px] border-solid rounded-lg shadow-xl shadow-black border-black bg-slate-50 w-full flex justify-between items-center px-[30px] h-[70px] mb-[60px]'>
        <NavLink to='/dashboard'>
          <FontAwesomeIcon className="ml-4 mr-2" icon={faBars} />
          Home
        </NavLink>
        {/* <button>Admin
          <FontAwesomeIcon className="ml-4" icon={faChevronDown} />
        </button> */}
        <NavLink to='/login' className="text-red-500"> Log out      <FontAwesomeIcon icon={faCaretRight} className="pr-2"/></NavLink>
      </section>
      <h2 className='w-full ml-[120px] text-4xl font-semibold mb-[40px]'>
        Dashboard
      </h2>
      <section className='border-b-[1px] border-solid rounded-lg shadow-xl shadow-black border-black bg-slate-50 w-10/12 flex justify-between items-center px-[30px] h-[100px] mb-[60px]'>
      <h3 className="text-3xl">¡Bienvenido/a!</h3>
      <h3 className="text-3xl"> Welcome!</h3>
      
      </section>
      <p >¡Para navegar selecciona alguna opcion en el</p>
      <p >navegador de la izquierda!</p>
      </section>
    </main>)
}
export default Dashboard;