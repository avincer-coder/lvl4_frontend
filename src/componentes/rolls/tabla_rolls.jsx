import { useEffect, useState } from "react";
import { formatearFecha } from "../../util";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFileCirclePlus} from '@fortawesome/free-solid-svg-icons';

const TablaRolls = ({showModal, closeModal}) => {
    const [datos, setDatos] = useState([]);
    console.log('El estado del modal es:', showModal);

    useEffect(() => {
            console.log('El estado del modal esssssssssss:', showModal);
            const token = localStorage.getItem('token');
            console.log(token);
        
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
                  console.log('Datos recibidos:', data); // Agregado para depuración
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
          [showModal]
          );
          const estadoBtn  = async () =>{
            console.log(token);
            const newEstado = ishabilitado ? 1 : 0;
            setEstado(newEstado);
            console.log(newEstado);
            try {
              const response = await fetch(`http://127.0.0.1:8000/api/rolls/${userid}` 
              ,{
                method: 'PUT',
                
                headers: {
                  'Authorization': `Bearer ${token}`,
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                  {  
                    "estado" : estado
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
              <td className="text-center text-green-500">
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