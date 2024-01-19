import { useEffect, useState } from "react";

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
                // ,{
                //   method: 'GET',
                //   headers: {
                //     'Authorization': `Bearer ${token}`
                //   },
                // }
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


    return(
        <>
            <p>
                PRUEBAAAAA
            </p>
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
              <td>{item.estado}</td>
              <td>{item.created_at}</td>
              <td>{item.updated_at}</td>
              <td>btn</td>
            </tr>
          ))}
        </tbody>
      </table>
        </>
    )
}
export default TablaRolls