import React from 'react'
import './Inicio.css'
import Carrusel from '../Carrusel/Carrusel.jsx'
import Redes from '../Redes/Redes.jsx'

const Inicio = () => {
    return (
        <div>
            <img src="./img/programador.png" alt="programador" className='programador'/>
            <Carrusel/>
            <Redes/>
        </div>
    )
}

export default Inicio