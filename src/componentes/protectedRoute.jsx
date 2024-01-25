import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Verificar la existencia del token en el localStorage
    const token = localStorage.getItem("token");

    if (!token) {
      // Si no hay token, redirigir a /login
      navigate("/login");
    }
    // Puedes agregar lógica adicional aquí para verificar la validez del token, si es necesario.

  }, [navigate]);

  // Renderizar el contenido protegido si hay un token
  return <>{children}</>;
};

export default ProtectedRoute;
