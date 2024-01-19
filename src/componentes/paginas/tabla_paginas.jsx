import { useEffect, useState } from "react";

const TablaPaginas = ({showModal, closeModal}) => {
    const [datos, setDatos] = useState([]);
    console.log('El estado del modal es:', showModal);

    useEffect(() => {
            console.log('El estado del modal esssssssssss:', showModal);
            const token = localStorage.getItem('token');
            console.log(token);
        
            const fetchData = async () => {
              try {
                const response = await fetch('http://127.0.0.1:8000/api/paginas' 
                // ,{
                //   method: 'GET',
                //   headers: {
                //     'Authorization': `Bearer ${token}`
                //   },
                // }
                );
                if (response.ok) {
                  const data = await response.json();
                  console.log('Datos recibidos:', data.paginas); // Agregado para depuración
                  setDatos(data.paginas);
                 
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
          const estadoBtn = () =>{
            console.log('Funcion para editar el estado de btn en base de datos')
          }

    return(
        <>
            <p>
                PRUEBAAAAA
            </p>
            <table>
         <thead>
           <tr>
             <th>ID de la Pagina</th>
             <th>URL</th>
             <th>Nombre de la Pagina</th>
             <th>Descripción</th>
             <th>Creado</th>
           </tr>
         </thead>
         <tbody>
           {datos.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.url}</td>
              <td>{item.nombre}</td>
              <td>{item.descripcion}</td>
              <td>{item.created_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
        </>
    )
}
export default TablaPaginas