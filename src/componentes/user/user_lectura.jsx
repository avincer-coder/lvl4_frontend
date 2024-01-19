import React, { useEffect, useState } from 'react';

const User = () => {

  const [formData, setFormData] = useState({
    usuario: '',
    password: '',
    people_id: '',
    rolls_id: '',
    fecha: '',
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
      const response = await fetch('http://127.0.0.1:8000/api/registro', {
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
      <button onClick={openModal}>Abrir Modal</button>
      <h1>Tabla de Datos</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>ID DOS</th>
            <th>Nombre</th>
            <th>Roll</th>
            <th>Fecha de nacimiento</th>
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

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            
      <form onSubmit={handleSubmit}>
      <label>
        usuario:
        <input
          type="text"
          name="usuario"
          value={formData.usuario}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="text"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        People ID:
        <input
          type="text"
          name="people_id"
          value={formData.people_id}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Rolls ID:
        <input
          type="text"
          name="rolls_id"
          value={formData.rolls_id}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Nombres
        <input
          type="text"
          name="nombres"
          value={formData.nombres}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Apellidos
        <input
          type="text"
          name="apellidos"
          value={formData.apellidos}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Correo
        <input
          type="text"
          name="correo"
          value={formData.correo}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Fecha Nacimiento
        <input
          type="date"
          name="fecha"
          value={formData.fecha}
          onChange={handleChange}
        />
            {/* Para verificar si formData.fecha tiene un valor, puedes mostrarlo en algún lugar del componente */}
      <p>Fecha seleccionada: {formData.fecha}</p>
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

export default User;

