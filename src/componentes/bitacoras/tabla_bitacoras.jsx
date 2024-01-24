import { useEffect, useState } from "react";
import Navegacion from "../navegacion/navegacion";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronDown, faBars, faCaretRight } from '@fortawesome/free-solid-svg-icons';

const TablaBitacoras = () => {
    const [datos, setDatos] = useState([]);
   

    useEffect(() => {
          
            const token = localStorage.getItem('token');
            console.log(token);
        
            const fetchData = async () => {
              try {
                const response = await fetch('http://127.0.0.1:8000/api/bitacoras' 
                ,{
                  method: 'GET',
                  headers: {
                    'Authorization': `Bearer ${token}`
                  },
                }
                );
                if (response.ok) {
                  const data = await response.json();
                  console.log('Datos recibidos:', data.bitacoras); // Agregado para depuración
                  setDatos(data.bitacoras);
                 
                } else {
                  console.error('Error al obtener los datos de la API');
                }
              } catch (error) {
                console.error('Error en la solicitud:', error);
              }
            };
        
            fetchData();
          }, 
          []
          );

    return(
      <main className='flex bg-gray-300'>
        <section >
        <Navegacion className="bg-blue-600" />
      </section>
      <section className='flex flex-col justify-center items-center w-full'>
      <section className='border-b-[1px] border-solid rounded-lg shadow-xl shadow-black border-black bg-slate-50 w-full flex justify-between items-center px-[30px] h-[70px] mb-[60px]'>
        <div>
          <FontAwesomeIcon className="ml-4 mr-2" icon={faBars} />
          Home
        </div>
        {/* <button>Admin
          <FontAwesomeIcon className="ml-4" icon={faChevronDown} />
        </button> */}
        <NavLink to='/login' className="text-red-500"> Log out <FontAwesomeIcon icon={faCaretRight} className="pr-2"/></NavLink>
      </section>
      <h2 className='w-full ml-[120px] text-4xl font-semibold mb-[40px]'>
        Dashboard
      </h2>
      <article className='border-[1px] border-solid rounded-lg shadow-xl shadow-black border-black bg-slate-50 mb-[60px]'>
      <table className="mx-[50px] mt-12">
      <thead className="mb-[40px]">
           <tr className="mb-[50px] border-b-[3.5px] border-solid border-blue-200 h-[50px]">
             <th className="w-[100px]">Codigo de Bitacora</th>
             <th>Bitacora</th>
             <th>Fecha</th>
             <th>Hora</th>
           </tr>
         </thead>
         <tbody>
           {datos.map((item) => (
            <tr className="border-t-[3.5px] border-solid border-blue-200" key={item.id}>
              <td className="flex justify-center">{item.id}</td>
              <td className="text-center w-[250px]">{item.bitacora}</td>
              <td className="text-center w-[100px]">{item.fecha}</td>
              <td className="text-center w-[100px]">{item.hora}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </article>
      </section>
      </main>
    )
}
export default TablaBitacoras