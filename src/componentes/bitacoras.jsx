import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';


const TablaBitacoras = () => {

  const [formData, setFormData] = useState({
    rol: '',
    estado: '',
  });
  const [datos, setDatos] = useState([]);

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
    console.log('abrir modal');
    console.log(showModal );
  };

  const closeModal = () => {
    setShowModal(false);
  };
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log(token);

    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/bitacoras', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`
          },
        });
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
  }, [showModal]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)

    try {
      const response = await fetch('http://127.0.0.1:8000/api/bitacoras', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Datos enviados correctamente');
        // Puedes realizar acciones adicionales aquí si es necesario
      } else {
        console.error('Error al enviar datos');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };


  return (
    <div>
        <NavLink to="/">
            Registrarse
        </NavLink>
        <NavLink to="/Login">
            Login
        </NavLink> 

      <button onClick={openModal}>Abrir Modal</button>
      <h1>Tabla de Datos</h1>
      <table>
        <thead>
          <tr>
            <th>Codigo de Bitacora</th>
            <th>Bitacora</th>
            <th>Estado</th>
            <th>Fecha</th>
            <th>Hora</th>
          </tr>
        </thead>
        <tbody>
          {datos.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.rol}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            
      <form onSubmit={handleSubmit}>
      <label>
        Roll
        <input
          type="text"
          name="rol"
          value={formData.rol}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Activo
        <input
          type="text"
          name="estado"
          value={formData.estado}
          onChange={handleChange}
        />
      </label>
      <br />
   
      <button type="submit">Enviar</button>
    </form>


            <button onClick={closeModal}>Cerrar Modal</button>
          </div>
        </div>
      )}

    </div>
  );
};

export default TablaBitacoras;

