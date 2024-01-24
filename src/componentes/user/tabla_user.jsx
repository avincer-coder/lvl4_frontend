import { useEffect, useState } from "react";
import { formatearFecha } from "../../util";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFileCirclePlus} from '@fortawesome/free-solid-svg-icons';


const TablaUser = ({showModal, closeModal}) => {
    const [datos, setDatos] = useState([]);
    const [estado, setEstado] = useState(undefined);
    const token = localStorage.getItem('token');
    console.log(token);

    useEffect(() => {        
            const fetchData = async () => {
              try {
                const response = await fetch('http://127.0.0.1:8000/api/user' 
                ,{
                  method: 'GET',
                  headers: {
                    'Authorization': `Bearer ${token}`
                  },
                }
                );
                if (response.ok) {
                  const data = await response.json();
                  console.log('Datos recibidos:', data.user); // Agregado para depuración
                  setDatos(data.user);
                 
                } else {
                  console.error('Error al obtener los datos de la API');
                }
              } catch (error) {
                console.error('Error en la solicitud:', error);
              }
            };
        
            fetchData();
          }, 
          [showModal, estado]
          );


          const estadoBtn = async (userid ,ishabilitado) =>{
            console.log(token);
            const newEstado = ishabilitado ? 0 : 1;
            setEstado(prevState=>(prevState===undefined ? newEstado : !prevState));
            console.log(newEstado);
            console.log('Numero de usuario para comprobaaaaarrrrr' + userid);
            try {
              const response = await fetch(`http://127.0.0.1:8000/api/user/${userid}` 
              ,{
                method: 'PUT',
                
                headers: {
                  'Authorization': `Bearer ${token}`,
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                  {  
                    "habilitado" : newEstado
                  }),
              }
              );
              if (response.ok) {
               console.log('respuesta bien hecha')
              } else {
                console.error('Error al obtener los datos de la API');
              }
            } catch (error) {
              console.error('Error en la solicitud:', error);
            }

          }

    return(
        <>
          <table className="mx-[70px] mt-12 w-[1000px]">
          <thead className="mb-[40px]">
           <tr className="mb-[50px] border-b-[3.5px] border-solid border-blue-200 h-[50px]">
             <th className="">#</th>
             <th>Correo</th>
             <th>Estado</th>
             <th>Fecha de Creación</th>
             <th>Codigo de Rol</th>
             <th>Última Modificación</th>
             <th>Cambiar Estado</th>
           </tr>
         </thead>
         <tbody>
           {datos.map((item) => (
            <tr className="border-t-[3.5px] border-solid border-blue-200" key={item.id}>
              <td className="flex justify-center">{item.id}</td>
              <td className="text-center">{item.correo}</td>
              <td className="text-center">
                {item.habilitado ? 'Activo' : 'Inactivo'}</td>
              <td className="text-center">{formatearFecha(item.created_at)}</td>
              <td className="text-center">{item.rolls_id}</td>
              <td className="text-center">{formatearFecha(item.updated_at)}</td>
              <td className={`text-center ${item.habilitado ? 'text-green-500' : 'text-red-500'}`}>
                <button onClick={()=>estadoBtn(item.id, item.habilitado)}>     
                  {item.habilitado ? 'Activo' : 'Inactivo'}
                  <FontAwesomeIcon className="ml-4" icon={faFileCirclePlus} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
        </>
    )
}
export default TablaUser