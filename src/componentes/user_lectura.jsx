import React, { useEffect, useState } from 'react';

const TablaUser = () => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log(token);

    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/user', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`
          },
        });

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
  }, []);

  return (
    <div>
      <h1>Tabla de Datos</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
            {/* Agrega más encabezados según tus datos */}
          </tr>
        </thead>
        <tbody>
          {datos.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.people_id}</td>
              <td>{item.rolls_id}</td>
              <td>{item.usuarios}</td>
              <td>{item.fecha}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaUser;

