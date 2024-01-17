import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Login from "./componentes/login";
import Registrarse from "./componentes/registrarse.jsx";
import TablaUser from "./componentes/user_lectura.jsx";

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
    element: <TablaUser />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);