import { useEffect, useState } from "react";
import { formatearFecha } from "../../util";

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
                ,{
                  method: 'GET',
                  headers: {
                    'Authorization': `Bearer ${token}`
                  },
                }
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
        <table className="mx-[40px] mt-12">
          <thead className="mb-[20px]">
           <tr className="mb-[50px] border-b-[3.5px] border-solid border-blue-200 h-[50px]">
             <th className="w-[100px]">ID de la Pagina</th>
             <th>URL</th>
             <th className="w-[150px]">Nombre de la Pagina</th>
             <th>Descripción</th>
             <th>Creado</th>
           </tr>
         </thead>
         <tbody>
           {datos.map((item) => (
            <tr  className="border-t-[3.5px] border-solid border-blue-200" key={item.id}>
              <td className="flex justify-center">{item.id}</td>
              <td className="text-center w-[200px]">{item.url}</td>
              <td className="text-center w-[100px]">{item.nombre}</td>
              <td className="text-center w-[200px]">{item.descripcion}</td>
              <td className="text-center w-[100px]">{formatearFecha(item.created_at)}</td>
            </tr>
          ))}
        </tbody>
      </table>
        </>
    )
}
export default TablaPaginas