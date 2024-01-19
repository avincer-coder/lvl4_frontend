import React, { useState } from 'react';

const User = () => {
  const [values, setValues] = useState({ apellidos: '', nombres: '', correo: '',  fecha: '' });
  const [showModal, setShowModal] = useState(false);

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
    <>
      <button onClick={openModal}>Abrir Modal</button>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <form onSubmit={handleSubmit}>
              <label>
                Correo Electronico
                <input
                  type="text"
                  name="correo"
                  value={values.correo}
                  onChange={handleChange}
                />
              </label>
              <label>
                Nombres
                <input
                  type="text"
                  name="nombres"
                  value={values.nombres}
                  onChange={handleChange}
                />
              </label>
              <label>
                Apellidos
                <input
                  type="text"
                  name="apellidos"
                  value={values.apellidos}
                  onChange={handleChange}
                />
              </label>
              <label>
                Fecha de Nacimiento
                <input
                  type="date"
                  name="fecha"
                  value={values.fecha}
                  onChange={handleChange}
                />
              </label>
              <button type="submit">Enviar</button>
            </form>
            <button onClick={closeModal}>Cerrar Modal</button>
          </div>
        </div>
      )}
      {/* <TablaPaginas 
      showModal={showModal} 
      closeModal={closeModal}
    /> */}
    </>
  );
};

export default User;
