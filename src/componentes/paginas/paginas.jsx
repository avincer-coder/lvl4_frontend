import React, { useState } from 'react';
import TablaPaginas from './tabla_paginas';
import Navegacion from '../navegacion/navegacion';

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
    <main className='flex'>
      <section>
        <Navegacion className="bg-blue-600" />
      </section>
      <section>
      <button onClick={openModal}>Abrir Modal</button>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <form onSubmit={handleSubmit}>
              <label>
                Url
                <input
                  type="text"
                  name="url"
                  value={values.url}
                  onChange={handleChange}
                />
              </label>
              <label>
                Nombre
                <input
                  type="text"
                  name="nombre"
                  value={values.nombre}
                  onChange={handleChange}
                />
              </label>
              <label>
                Descripción
                <input
                  type="text"
                  name="descripcion"
                  value={values.descripcion}
                  onChange={handleChange}
                />
              </label>
              <button type="submit">Enviar</button>
            </form>
            <button onClick={closeModal}>Cerrar Modal</button>
          </div>
        </div>
      )}
      <TablaPaginas 
      showModal={showModal} 
      closeModal={closeModal}
      />
      </section>
    </main>
  );
};

export default Paginas;
