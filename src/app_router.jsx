import Login from "./componentes/login"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import TablaUser from "./componentes/user_lectura";
import TablaRolls from "./componentes/rolls";
import TablaBitacoras from "./componentes/bitacoras";


const App_Router = () => {

    return (
            
        
        <>
            <Router>
                <Routes>
                    <Route
                        path="/login" element={Login} />
                    <Route
                        path="/userlectura" element={TablaUser} />
                    <Route
                        path="/rolls" element={TablaRolls} />
                    <Route
                        path="/bitacoras" element={TablaBitacoras} />
                </Routes>
            </Router>
        </>
    )
}
export default App_Router