import React, { useEffect, useState } from 'react';
import TablaUser from './tabla_user';
import Navegacion from '../navegacion/navegacion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NavLink, useNavigate, } from 'react-router-dom';
import LogoutButton from '../funciones/logout';
const User = () => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  

  useEffect(() => {
    if (token == null) {
      navigate("/login");
    }
  }, []);


  const [values, setValues] = useState({usuario:'', password:'', correo: '', nombres: '',  apellidos: '',  fecha: '' });
  const [showModal, setShowModal] = useState(false);
  console.log(token);
  
  
  const openModal = () => {
    setShowModal(true);
    console.log('abrir modal');
    console.log(showModal);
  };
  

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values.password);
    console.log(values.usuario);
    try {
      const response = await fetch('http://127.0.0.1:8000/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
          // Puedes incluir otros encabezados según sea necesario
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data); // Maneja la respuesta del servidor como desees
      } else {
        console.error('Error al enviar el formulario');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    // Si el campo es 'usuario', establecer el mismo valor en 'password'
    if (name === 'usuario') {
      setValues((prevValues) => ({
        ...prevValues,
        usuario: value,
        password: value,  // Establecer el mismo valor de 'usuario' en 'password'
      }));
    } else {
      setValues((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
    }
  };

  return (
    <main className='flex bg-gray-300'>
      <section>
        <Navegacion className="bg-blue-600" />
      </section>
      <section className='flex flex-col justify-center items-center w-full'>
      <section className='border-b-[1px] border-solid rounded-lg shadow-xl shadow-black border-black bg-slate-50 w-full flex justify-between items-center px-[30px] h-[70px] mb-[60px]'>
        <NavLink to='/dashboard'>
          <FontAwesomeIcon className="ml-4 mr-2" icon={faBars} />
          Home
        </NavLink>
   
        < LogoutButton />
      </section>
      <h2 className='w-full ml-[120px] text-4xl font-semibold mb-[40px]'>
        Dashboard
      </h2>
      <article className='border-[1px] border-solid rounded-lg shadow-xl shadow-black border-black bg-slate-50 w-[1150px] flex justify-between items-center px-[30px] h-[70px] mb-[60px]'>
        <h3>Información de Usuarios</h3>
        <button className='bg-blue-600 text-neutral-100	w-[200px] h-[40px] rounded-lg' onClick={openModal} >Agregar nuevo Usuario</button>
      </article>
      {showModal && (
        <div className="modal-overlay border-[1px] border-solid rounded-lg bg-slate-50 w-[500px] h-[500px] mb-[50px] p-10 
        
        fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto">
          <div className="modal flex flex-col	h-full
          
          fixed inset-0 bg-black ">
            <div className=" relative">
            <div className="bg-white   ">

            <form onSubmit={handleSubmit} className='modal flex flex-col h-full justify-between	'>
              <h3 className='text-2xl font-semibold'>Agregar Usuario</h3>
              <label className='flex flex-col font-semibold'>
                Correo Electronico
                <input
                  className='pl-2 border-2 border-solid rounded-lg border-slate-300 h-8'
                  placeholder='Ingresa el email'
                  type="text"
                  name="correo"
                  value={values.correo}
                  onChange={handleChange}
                />
              </label>
              <label className='flex flex-col font-semibold'>
                Nombres
                <input
                  className='pl-2 border-2 border-solid rounded-lg border-slate-300 h-8'
                  placeholder='Ingresa el primer y segundo nombre'
                  type="text"
                  name="nombres"
                  value={values.nombres}
                  onChange={handleChange}
                />
              </label>
              <label className='flex flex-col font-semibold'>
                Apellidos
                <input
                  className='pl-2 border-2 border-solid rounded-lg border-slate-300 h-8'
                  placeholder='Ingresa los apellidos'
                  type="text"
                  name="apellidos"
                  value={values.apellidos}
                  onChange={handleChange}
                />
              </label>
              <label className='flex flex-col font-semibold'>
                Fecha de Nacimiento
                <input
                  className='pl-2 border-2 border-solid rounded-lg border-slate-300 h-8'
                  placeholder='Ingresa el email'
                  type="date"
                  name="fecha"
                  value={values.fecha}
                  onChange={handleChange}
                />
              </label>
              <label className='flex flex-col font-semibold'>
                Escribe un usuario
                <input
                  className='pl-2 border-2 border-solid rounded-lg border-slate-300 h-8'
                  placeholder='Ingresa el email'
                  type="text"
                  name="usuario"
                  value={values.usuario}
                  onChange={handleChange}
                />
              </label>
              <p className='text-gray-400 text-center'>La contraseña sera por defecto tu usuario</p>
              <button className='mb-[10px] bg-gray-600 text-neutral-100	w-full h-[35px] rounded-lg' type="submit">Guardar</button>
            </form>
            </div>
            <button className='bg-red-600 text-neutral-100	w-full h-[40px] rounded-lg' onClick={closeModal}>Cerrar y Mostrar Nuevo Usuario</button>
          </div>
          </div>
        </div>
      )}

      <article className='border-[1px] border-solid rounded-lg shadow-xl shadow-black border-black bg-slate-50 mb-[60px]'>
        <TablaUser 
          showModal={showModal} 
          closeModal={closeModal}
        />
      </article>
      </section>
    </main>
  );
};

export default User;
