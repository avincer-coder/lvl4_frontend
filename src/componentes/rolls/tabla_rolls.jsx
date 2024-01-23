import { useEffect, useState } from "react";
import { formatearFecha } from "../../util";

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
          <table>
         <thead>
           <tr>
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
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.rol}</td>
              <td>{item.estado ? 'activo' : 'inactivo'}</td>
              <td>
              {
                
              
                formatearFecha(item.created_at)
              
              
              }
              </td>
              <td>{formatearFecha(item.updated_at)}</td>
              <td>
                <button onClick={()=>estadoBtn(item.id, item.estado)}>{item.estado ? 'Activo' : 'Inactivo'}</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
        </>
    )
}
export default TablaRolls