import Login from "./componentes/login"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import TablaUser from "./componentes/user_lectura";


const App_Router = () => {

    return (
            
        
        <>
            <Router>
                <Routes>
                    <Route
                        path="/login" element={Login} />
                    <Route
                        path="/userlectura" element={TablaUser} />
                </Routes>
            </Router>
        </>
    )
}
export default App_Router