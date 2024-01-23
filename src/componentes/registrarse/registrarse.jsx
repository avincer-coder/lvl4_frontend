import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import dev from '../img/dev.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope, faLock} from '@fortawesome/free-solid-svg-icons'
// import {faGoogle} from '@fortawesome/free-solid-svg-icons'

const Registrarse = () => {
  const [values, setValues] = useState({ usuario: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);
    try {
      const response = await fetch('http://127.0.0.1:8000/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Puedes incluir otros encabezados según sea necesario
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        navigate("/login");
      } else {
        console.error('Error al enviar el formulario');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }

  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <main className='flex h-screen justify-center items-center '>
            <form className='border-[1px] border-solid rounded  shadow-xl shadow-black flex items-center justify-around flex-col h-[350px] p-6' onSubmit={handleSubmit}>
              <section className='w-full'>
                <img src={dev} alt="dev" className='w-[100px]' />
              </section>
              <h1 className='w-[200px] text-lg font-bold	'>Create a new user and password</h1>
              <label className='block border-solid border border-slate-500 rounded pl-2'>
                <FontAwesomeIcon icon={faEnvelope} />
                <input
                  className='ml-[5px] rounded pl-2'
                  type="text"
                  name="usuario"
                  value={values.usuario}
                  onChange={handleChange}
                />
              </label>
              <label  className='block border-solid border border-slate-500 rounded pl-2'>
                <FontAwesomeIcon icon={faLock} />
                <input
                  className='ml-[5px] rounded pl-2'
                  type="text"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                />
              </label>
              <button className='bg-blue-500 text-neutral-100	w-full rounded' type="submit">Register</button>
              <p>or</p>
              <a className='text-blue-500 underline' href="">Login</a>
              
            </form>
            
    </main>
  );
};

export default Registrarse;
