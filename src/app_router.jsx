import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Rolls from "./componentes/rolls/rolls";
import Paginas from "./componentes/paginas/paginas";
import Login from './componentes/login/login';
import Registrarse from './componentes/registrarse/registrarse';
import User from './componentes/user/user';
import TablaBitacoras from './componentes/bitacoras/tabla_bitacoras';
import Navegacion from './componentes/navegacion/navegacion';
import Dashboard from './componentes/dashboard/dashboard';


const App_Router = () => {

    return (
            
        
        <>
            <Router>
                <Routes>
                    <Route
                        path="/login" element={Login} />
                    <Route
                        path="/user" element={User} />
                    <Route
                        path="/rolls" element={Rolls} />
                    <Route
                        path="/bitacoras" element={TablaBitacoras} />
                    <Route
                        path="/paginas" element={Paginas} />
                    <Route
                        path="/registrarse" element={Registrarse} />
                    <Route
                        path="/navegacion" element={Navegacion} />
                    <Route
                        path="/dashboard" element={Dashboard} />
                </Routes>
            </Router>
        </>
    )
}
export default App_Router