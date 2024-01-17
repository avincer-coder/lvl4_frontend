import './App.css'
import Login from './componentes/login';
import Registrarse from './componentes/registrarse';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Registrarse</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Routes>
          <Route path="/" element={Registrarse} />
          <Route path="/login" element={Login} />
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
