import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Rolls from "./componentes/rolls/rolls.jsx";
import Paginas from "./componentes/paginas/paginas.jsx";
import Login from "./componentes/login/login.jsx";
import Registrarse from "./componentes/registrarse/registrarse.jsx";
import User from "./componentes/user/user.jsx";
import TablaBitacoras from "./componentes/bitacoras/tabla_bitacoras.jsx";
import './output.css'
import Navegacion from "./componentes/navegacion/navegacion.jsx";
import Dashboard from "./componentes/dashboard/dashboard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Registrarse />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/user",
    element: <User />,
  },
  {
    path: "/rolls",
    element: <Rolls />,
  },
  {
    path: "/bitacoras",
    element: <TablaBitacoras />,
  },
  {
    path: "/paginas",
    element: <Paginas />,
  },
  {
    path: "/navegacion",
    element: <Navegacion />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);