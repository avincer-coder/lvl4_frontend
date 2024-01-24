import React, { useState } from 'react';
import TablaRolls from './tabla_rolls';
import Navegacion from '../navegacion/navegacion';

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
    <>
    <Navegacion />
    <button onClick={openModal}>Abrir Modal</button>
    {showModal && (
      <div className="modal-overlay">
        <div className="modal">
          <form onSubmit={handleSubmit}>
            <label>
              Rol:
              <input
                type="text"
                value={rol}
                onChange={(e) => setRol(e.target.value)}
              />
            </label>
            <button type="submit">Enviar</button>
          </form>
          <button onClick={closeModal}>Cerrar Modal</button>
        </div>
      </div>
    )}
    <TablaRolls 
      showModal={showModal} 
      closeModal={closeModal}
    />
    
    </>
  );
};

export default Rolls;
