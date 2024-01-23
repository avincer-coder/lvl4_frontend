import { useEffect, useState } from "react";
import { formatearFecha } from "../../util";

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
            const newEstado = ishabilitado ? 1 : 0;
            setEstado(newEstado);
            console.log(newEstado);
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
                    "habilitado" : estado
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
             <th>#</th>
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
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.correo}</td>
              <td>
                {item.habilitado ? 'Activo' : 'Inactivo'}</td>
              <td>{formatearFecha(item.created_at)}</td>
              <td>{item.rolls_id}</td>
              <td>{formatearFecha(item.updated_at)}</td>
              <td>
                <button onClick={()=>estadoBtn(item.id, item.habilitado)}>     
                  {item.habilitado ? 'Activo' : 'Inactivo'}
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