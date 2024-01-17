import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Registrarse = () => {
  const [formData, setFormData] = useState({
    usuario: '',
    password: '',
    people_id: '',
    rolls_id: '',
  });

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
    <>
        <NavLink to="/">
            Registrarse
        </NavLink>
        <NavLink to="/Login">
            Login
        </NavLink> 


    <form onSubmit={handleSubmit}>
      <label>
        Usuario:
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
      <button type="submit">Enviar</button>
    </form>
    </>
  );
};

export default Registrarse;
