import React, { useState } from 'react';

const Login = () => {
  const [credentials, setCredentials] = useState({
    usuario: '',
    password: '',
  });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        console.log('Inicio de sesión exitoso');
        const json_response = await response.json()
        localStorage.setItem('token', json_response.token)
        // Puedes realizar acciones adicionales aquí si es necesario, como redireccionar a otra página
      } else {
        console.error('Error en el inicio de sesión');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre de usuario:
        <input
          type="text"
          name="usuario"
          value={credentials.usuario}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Contraseña:
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Iniciar sesión</button>
    </form>
  );
};

export default Login;
