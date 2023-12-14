import React from 'react'
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
    return (
        <header>
            <Link to={'/'} className='titulo'>
                <img src="./favicon-32x32.png" alt="logo" className='navbar-brand' />
            </Link>
            <nav className="navbar navbar-expand-lg">

                <div className="container-fluid">


                    <button className="navbar-toggler pull-left" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                            <li className="nav-item">
                                <NavLink to={`/`} className="nav-link">Inicio</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={`/proyectos`} className="nav-link">Proyectos</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={`/Contacto`} className="nav-link">Contacto</NavLink>
                            </li>
                        </ul>
                    </div>

                </div>

            </nav>
        </header>
    )
}

export default Navbar