import React from 'react'
import "./Proyectos.css"
import { useState } from 'react';

const Proyectos = () => {

    //useState proyecto 1
    const [hover, setHover] = useState(false);

    const handleHoverPr1 = () => {
        setTimeout(() => {
            setHover(true);
        }, 1000); // 1000 milisegundos = 1 segundo
    };

    const handleLeavePr1 = () => {
        setHover(false);
    };

    //useState proyecto2
    const [hoverPr2, setHoverPr2] = useState(false);

    const handleHoverPr2 = () => {
        setTimeout(() => {
            setHoverPr2(true);
        }, 1000);
    };

    const handleLeavePr2 = () => {
        setHoverPr2(false);
    };

    //useState proyecto3
    const [hoverPr3, setHoverPr3] = useState(false);

    const handleHoverPr3 = () => {
        setTimeout(() => {
            setHoverPr3(true);
        }, 1000);
    };

    const handleLeavePr3 = () => {
        setHoverPr3(false);
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
            <div className='pr3'
                onMouseEnter={handleHoverPr3}
                onMouseLeave={handleLeavePr3}
                style={{ justifyContent: hoverPr3 ? 'space-between' : 'flex-end' }}
            >
                <div className='contenedorTexto'
                    style={{ display: hoverPr3 ? 'block' : 'none' }}
                >
                    <p className='texto'>
                        Con un estilo minimalista se desarrolló a pedido de la artista Rocío Ricagno una web porfolio personal implementado con React, pequeñas dinámicas con Javascript y algo de estilo con Bootstrap.
                    </p>
                    <p>
                        Año de lanzamiento: 2023
                    </p>
                </div>
                <a href="https://rocioricagno.ar/" className='btn' target='_blank'>Ver mas...</a>
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