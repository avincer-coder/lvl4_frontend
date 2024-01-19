import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Rolls from "./componentes/rolls/rolls";
import Paginas from "./componentes/paginas/paginas";
import Login from './componentes/login/login';
import Registrarse from './componentes/registrarse/registrarse';
import Bitacoras from './componentes/bitacoras/bitacoras';
import User from './componentes/user/user';


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
                        path="/bitacoras" element={Bitacoras} />
                    <Route
                        path="/paginas" element={Paginas} />
                    <Route
                        path="/registrarse" element={Registrarse} />
                </Routes>
            </Router>
        </>
    )
}
export default App_Router