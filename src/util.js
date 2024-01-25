
export const formatearFecha = (fechaStr) => {
    const fechaObj = new Date(fechaStr);
    const ano = fechaObj.getFullYear();
    const mes = fechaObj.getMonth() + 1;
    const dia = fechaObj.getDate();
    return `${ano}-${mes < 10 ? '0' : ''}${mes}-${dia < 10 ? '0' : ''}${dia}`;
  };


  