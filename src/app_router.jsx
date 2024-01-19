import Login from "./componentes/login"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import TablaUser from "./componentes/user_lectura";
import TablaBitacoras from "./componentes/bitacoras";
import Rolls from "./componentes/rolls/rolls";
import User from "./componentes/user/user_lectura";


const App_Router = () => {

    return (
            
        
        <>
            <Router>
                <Routes>
                    <Route
                        path="/login" element={Login} />
                    <Route
                        path="/userlectura" element={User} />
                    <Route
                        path="/rolls" element={Rolls} />
                    <Route
                        path="/bitacoras" element={TablaBitacoras} />
                </Routes>
            </Router>
        </>
    )
}
export default App_Router