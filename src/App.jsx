import './App.css'
import Inicio from './Components/Inicio/Inicio.jsx'
import Navbar from './Components/Navbar/Navbar'
import Proyectos from './Components/Proyectos/Proyectos'
import Contacto from './Components/Contacto/Contacto'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
    
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/proyectos" element={<Proyectos />}/>
        <Route path="/contacto" element={<Contacto />}/>
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
