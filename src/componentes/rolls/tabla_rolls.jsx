import { useEffect, useState } from "react";
import { formatearFecha } from "../../util";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFileCirclePlus} from '@fortawesome/free-solid-svg-icons';

const TablaRolls = ({showModal, closeModal}) => {
    const [datos, setDatos] = useState([]);
    const token = localStorage.getItem('token');
    const [estado, setEstado] = useState(undefined);

    useEffect(() => {
                   
            const fetchData = async () => {
              try {
                const response = await fetch('http://127.0.0.1:8000/api/rolls' 
                ,{
                  method: 'GET',
                  headers: {
                    'Authorization': `Bearer ${token}`
                  },
                }
                );
                if (response.ok) {
                  const data = await response.json();
                  setDatos(data);
                 
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
          const estadoBtn  = async (rolid, ishabilitado) =>{
            const newEstado = ishabilitado ? 0 : 1;
            setEstado(prevState=>(prevState===undefined ? newEstado : !prevState));
            console.log("Aqui abajo deberia ir el cambio de estado");
            console.log(newEstado);
            try {
              const response = await fetch(`http://127.0.0.1:8000/api/rolls/${rolid}` 
              ,{
                method: 'PUT',
                
                headers: {
                  'Authorization': `Bearer ${token}`,
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                  {  
                    "estado" : newEstado
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
             <th>Codigo de Roll</th>
             <th>Roll</th>
             <th>Estado</th>
             <th>Fecha de Creación</th>
             <th>Fecha de Modificación</th>
             <th>Cambiar Estado</th>

           </tr>
         </thead>
         <tbody>
           {datos.map((item) => (
            <tr className="border-t-[3.5px] border-solid border-blue-200" key={item.id}>
              <td className="flex justify-center">{item.id}</td>
              <td className="text-center">{item.rol}</td>
              <td className="text-center">{item.estado ? 'activo' : 'inactivo'}</td>
              <td className="text-center">
              {
                
              
                formatearFecha(item.created_at)
              
              
              }
              </td >
              <td className="text-center"> {formatearFecha(item.updated_at)}</td>
              <td className={`text-center ${item.estado ? 'text-green-500' : 'text-red-500'}`}>
                <button onClick={()=>estadoBtn(item.id, item.estado)}>{item.estado ? 'Activo' : 'Inactivo'}
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
export default TablaRolls