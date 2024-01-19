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
import Bitacoras from "./componentes/bitacoras/bitacoras.jsx";
import User from "./componentes/user/user.jsx";

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
    element: <Bitacoras />,
  },
  {
    path: "/paginas",
    element: <Paginas />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);