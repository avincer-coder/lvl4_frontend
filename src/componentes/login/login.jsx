import React, { useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
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
        console.log(json_response.token)
        console.log(json_response)
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
    <main className='flex h-screen justify-center items-center '>
    <form className='border-[1px] border-solid rounded-lg  shadow-xl shadow-black flex items-center justify-around flex-col w-[400px] h-[500px] p-6' onSubmit={handleSubmit}>
      <section className='w-full'>
        <img className='w-[150px]'  src={dev} alt="dev" />
      </section>
      <h1 className='w-full text-4xl font-bold	'>Login</h1>
      <label  className='flex block border-solid border border-slate-500 rounded pl-2 w-[350px] h-10 items-center	'>
        <FontAwesomeIcon className='text-xl' icon={faEnvelope} />
        <input
          className='ml-[5px] rounded pl-2 w-[319px] h-10 bg-transparent'
          type="text"
          name="usuario"
          value={credentials.usuario}
          onChange={handleChange}
          placeholder='User'
        />
      </label>
      <label  className='block border-solid border border-slate-500 rounded pl-2 w-[350px] h-10 flex items-center'>
      <FontAwesomeIcon className='text-xl' icon={faLock} />        <input
          className='ml-[5px] rounded pl-2 w-[322px] h-10 bg-transparent'
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
          placeholder='Password'
        />
      </label>
      <br />
      <button  className='bg-blue-600 text-neutral-100	w-full rounded-lg h-10'  type="submit">Login</button>
      <h2>or continue with these social profile</h2>
      <section className='w-full flex justify-evenly	'>
        <FontAwesomeIcon className='text-3xl hover:cursor-pointer' icon={faGoogle} />
        <FontAwesomeIcon className='hover:cursor-pointer text-3xl' icon={faSquareFacebook} />
        <FontAwesomeIcon className='hover:cursor-pointer text-3xl' icon={faTwitter} />
        <FontAwesomeIcon className='hover:cursor-pointer text-3xl' icon={faGithub} />
      </section>
      <h2>Don't have an account yet? 
        <NavLink className=" hover:cursor-pointer text-blue-500 underline" to='/'> Register</NavLink>
      </h2>
      
    </form>
    </main>
  );
};

export default Login;
