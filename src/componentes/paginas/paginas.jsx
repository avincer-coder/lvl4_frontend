import React, { useState } from 'react';
import TablaPaginas from './tabla_paginas';
import Navegacion from '../navegacion/navegacion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronDown, faBars, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const Paginas = () => {
  const [values, setValues] = useState({ url: '', nombre: '', descripcion: '' });
  const [showModal, setShowModal] = useState(false);
  const token = localStorage.getItem('token');

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8000/api/paginas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
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
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <main className='flex bg-gray-300'>
      <section>
        <Navegacion className="bg-blue-600" />
      </section>
      <section className='flex flex-col justify-center items-center w-full'>
      <section className='border-b-[1px] border-solid rounded-lg shadow-xl shadow-black border-black bg-slate-50 w-full flex justify-between items-center px-[30px] h-[70px] mb-[60px]'>
        <div>
          <FontAwesomeIcon className="ml-4 mr-2" icon={faBars} />
          Home
        </div>
        {/* <button>Admin
          <FontAwesomeIcon className="ml-4" icon={faChevronDown} />
        </button> */}
        <NavLink to='/login' className="text-red-500"> Log out <FontAwesomeIcon icon={faCaretRight} className="pr-2"/></NavLink>
      </section>
      <h2 className='w-full ml-[120px] text-4xl font-semibold mb-[40px]'>
        Dashboard
      </h2> 
      <article className='border-[1px] border-solid rounded-lg shadow-xl shadow-black border-black bg-slate-50 w-[1150px] flex justify-between items-center px-[30px] h-[70px] mb-[60px]'>
        <h3>Información de paginas</h3>
        <button onClick={openModal} className='bg-blue-600 text-neutral-100	w-[200px] h-[40px] rounded-lg'>Agregar nueva Pagina</button>
      </article>
      {showModal && (
        <div className="modal-overlay border-[1px] border-solid rounded-lg bg-slate-50 w-[500px] h-[500px] mb-[50px] p-10">
          <div className="modal flex flex-col	h-full">
            <form onSubmit={handleSubmit}
            className='modal flex flex-col h-full justify-between	'>
              <h3 className='text-2xl font-semibold'>Agregar Nueva Pagina</h3>
              <label className='flex flex-col font-semibold'>
                URL
                <input
                 className='pl-2 border-2 border-solid rounded-lg border-slate-300 h-10'
                 placeholder='Ingresa el email'
                  type="text"
                  name="url"
                  value={values.url}
                  onChange={handleChange}
                />
              </label>
              <label className='flex flex-col font-semibold'>
                Nombre
                <input
                  className='pl-2 border-2 border-solid rounded-lg border-slate-300 h-10'
                  placeholder='Nombre de la pagina'
                  type="text"
                  name="nombre"
                  value={values.nombre}
                  onChange={handleChange}
                />
              </label>
              <label className='flex flex-col font-semibold'>
                Descripción
                <input
                  className='pl-2 border-2 border-solid rounded-lg border-slate-300 h-10'
                  placeholder='Descripción'
                  type="text"
                  name="descripcion"
                  value={values.descripcion}
                  onChange={handleChange}
                />
              </label>
              <button 
              className='mb-[10px] bg-gray-600 text-neutral-100	w-full h-[35px] rounded-lg'
              type="submit">Guardar</button>
            </form>
            <button className='bg-red-600 text-neutral-100	w-full h-[40px] rounded-lg' onClick={closeModal}>Cerrar Modal</button>
          </div>
        </div>
      )}
      <article className='border-[1px] border-solid rounded-lg shadow-xl shadow-black border-black bg-slate-50 mb-[60px]'>
        <TablaPaginas 
          showModal={showModal} 
          closeModal={closeModal}
        />
      </article>
      </section>
    </main>
  );
};

export default Paginas;
