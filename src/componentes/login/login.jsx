import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGoogle, faGithub, faSquareFacebook, faTwitter} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope, faLock} from '@fortawesome/free-solid-svg-icons'
import dev from '../img/dev.png';

const Login = () => {
  const navigate = useNavigate();
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
        navigate("/user");
        // Puedes realizar acciones adicionales aquí si es necesario, como redireccionar a otra página
      } else {
        console.error('Error en el inicio de sesión');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  return (
    <main className='border-solid border-2 border-red-700 flex h-screen justify-center items-center '>
    <form className='border-[1px] border-solid rounded  shadow-xl shadow-black flex items-center justify-around flex-col h-[400px] p-6' onSubmit={handleSubmit}>
      <section className='w-full'>
        <img className='w-[100px]'  src={dev} alt="dev" />
      </section>
      <h1 className='w-[200px] text-lg font-bold	'>Login</h1>
      <label  className='block border-solid border border-slate-500 rounded pl-2'>
        <FontAwesomeIcon icon={faEnvelope} />
        <input
          className='ml-[5px] rounded pl-2'
          type="text"
          name="usuario"
          value={credentials.usuario}
          onChange={handleChange}
        />
      </label>
      <label  className='block border-solid border border-slate-500 rounded pl-2'>
      <FontAwesomeIcon icon={faLock} />        <input
          className='ml-[5px] rounded pl-2'
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
        />
      </label>
      <br />
      <button  className='bg-blue-500 text-neutral-100	w-full rounded'  type="submit">Login</button>
      <h2>or continue with these social profile</h2>
      <section className='w-full flex justify-evenly	'>
        <FontAwesomeIcon icon={faGoogle} />
        <FontAwesomeIcon icon={faSquareFacebook} />
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faGithub} />
      </section>
      <h2>Don't have an account yet? <a className='text-blue-500 underline' href="http://localhost:5173/login"> Register</a></h2>
      
    </form>
    </main>
  );
};

export default Login;
