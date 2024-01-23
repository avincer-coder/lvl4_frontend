import { useEffect, useState } from "react";
import Navegacion from "../navegacion/navegacion";

const TablaBitacoras = () => {
    const [datos, setDatos] = useState([]);
   

    useEffect(() => {
          
            const token = localStorage.getItem('token');
            console.log(token);
        
            const fetchData = async () => {
              try {
                const response = await fetch('http://127.0.0.1:8000/api/bitacoras' 
                // ,{
                //   method: 'GET',
                //   headers: {
                //     'Authorization': `Bearer ${token}`
                //   },
                // }
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
        <>
        <Navegacion />
            <table>
         <thead>
           <tr>
             <th>Codigo de Bitacora</th>
             <th>Bitacora</th>
             <th>Fecha</th>
             <th>Hora</th>
           </tr>
         </thead>
         <tbody>
           {datos.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.bitacora}</td>
              <td>{item.fecha}</td>
              <td>{item.hora}</td>
            </tr>
          ))}
        </tbody>
      </table>
        </>
    )
}
export default TablaBitacoras