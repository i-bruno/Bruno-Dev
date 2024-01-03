import React from 'react'
import "./Proyectos.css"
import { useState } from 'react';

const Proyectos = () => {

    //useState proyecto 1
    const [hover, setHover] = useState(false);

    const handleHoverPr1 = () => {
        setHover(true);
    };

    const handleLeavePr1 = () => {
        setHover(false);
    };

    //useState proyecto2
    const [hoverPr2, setHoverPr2] = useState(false);

    const handleHoverPr2 = () => {
        setHoverPr2(true);
    };

    const handleLeavePr2 = () => {
        setHoverPr2(false);
    };

    return (
        <div className='galeria'>
            <div className='pr1'
                onMouseEnter={handleHoverPr1}
                onMouseLeave={handleLeavePr1}
                style={{ justifyContent: hover ? 'space-between' : 'flex-end' }}
            >
                <div className='contenedorTexto'
                    style={{ display: hover ? 'block' : 'none' }}
                >
                    <p className='texto'>
                        Desarrollo y mantenimiento de un índice jerárquico de términos utilizando el software libre Tematres.
                    </p>
                    <p>
                        Año de lanzamiento: 2021
                    </p>
                </div>
                <a href="http://indice.archivocasla.com.ar/vocab/index.php" className='btn' target='_blank'>Ver mas...</a>
            </div>
            <div className='pr2'
                onMouseEnter={handleHoverPr2}
                onMouseLeave={handleLeavePr2}
                style={{ justifyContent: hoverPr2 ? 'space-between' : 'flex-end' }}
            >
                <div className='contenedorTexto'
                    style={{ display: hoverPr2 ? 'block' : 'none' }}
                >
                    <p className='texto'>
                        Desarrollo y mantenimiento de un repositorio digital utilizando el software libre Omeka.
                    </p>
                    <p>
                        Año de lanzamiento: 2020
                    </p>
                </div>
                <a href="http://repositorio.archivocasla.com.ar/" className='btn' target='_blank'>Ver mas...</a>
            </div>
            <div className='pr3'>
                <a href="#" className='btn'>Ver mas...</a>
            </div>
            <div className='pr1'>
                <a href="#" className='btn'>Ver mas...</a>
            </div>
            <div className='pr1'>
                <a href="#" className='btn'>Ver mas...</a>
            </div>
        </div>
    )
}

export default Proyectos