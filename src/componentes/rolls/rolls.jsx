import React, { useState } from 'react';
import TablaRolls from './tabla_rolls';
import Navegacion from '../navegacion/navegacion';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronDown, faBars, faCaretRight } from '@fortawesome/free-solid-svg-icons';

const Rolls = () => {
  const [rol, setRol] = useState('');
  const [showModal, setShowModal] = useState(false);
  const token = localStorage.getItem('token');

    const openModal = () => {
      setShowModal(true);
      console.log('abrir modal');
      console.log(showModal );
    };
  
    const closeModal = () => {
      setShowModal(false);
    };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(rol);
    try {
      const response = await fetch('http://127.0.0.1:8000/api/rolls', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`// Puedes incluir otros encabezados según sea necesario
        },
        body: JSON.stringify({ rol }),
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
        {/* <button>Admin
          <FontAwesomeIcon className="ml-4" icon={faChevronDown} />
        </button> */}
        <NavLink to='/login' className="text-red-500"> Log out <FontAwesomeIcon icon={faCaretRight} className="pr-2"/></NavLink>
      </section>
    <h2 className='w-full ml-[120px] text-4xl font-semibold mb-[40px]'>
      Dashboard
    </h2>
    <article className='border-[1px] border-solid rounded-lg shadow-xl shadow-black border-black bg-slate-50 w-[1150px] flex justify-between items-center px-[30px] h-[70px] mb-[60px]'>
    <h3>Información de Roles</h3>
    <button className='bg-blue-600 text-neutral-100	w-[200px] h-[40px] rounded-lg' onClick={openModal}>Agregar Nuevo Rol</button>
    </article>
    {showModal && (
      <div className="modal-overlay  border-[1px] border-solid rounded-lg bg-slate-50 w-[500px] h-[320px] mb-[50px] p-10">
        <div className="modal flex flex-col	h-full">
          <form onSubmit={handleSubmit}
          className='modal flex flex-col h-full justify-between	'>
            <h3 className='text-2xl font-semibold'>Agregar Nuevo Rol</h3>
            <label className='block font-semibold'>
              Nombre del nuevo Rol
              <input
              className='pl-2 border-2 border-solid rounded-lg border-slate-300 h-8 w-11/12'
              placeholder='Ingresa el nuevo rol'
                type="text"
                value={rol}
                onChange={(e) => setRol(e.target.value)}
              />
            </label>
            <button type="submit" className='mb-[10px] bg-gray-600 text-neutral-100	w-full h-[35px] rounded-lg' >Guardar</button>
          </form>
          <button className='bg-red-600 text-neutral-100	w-full h-[48px] rounded-lg' onClick={closeModal}>Cerrar y Mostrar Nuevo Rol</button>
        </div>
      </div>
    )}
    <article className='border-[1px] border-solid rounded-lg shadow-xl shadow-black border-black bg-slate-50 mb-[60px]'>
      <TablaRolls 
        showModal={showModal} 
        closeModal={closeModal}
      />
    </article>
    </section>
    
    </main>
  );
};

export default Rolls;
