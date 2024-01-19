import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Login from "./componentes/login";
import Registrarse from "./componentes/registrarse.jsx";
import TablaBitacoras from "./componentes/bitacoras.jsx";
import Rolls from "./componentes/rolls/rolls.jsx";
import User from "./componentes/user/user_lectura.jsx";

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
    path: "/userlectura",
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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);