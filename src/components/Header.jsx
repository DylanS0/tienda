import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import FiltroCategoria from './FiltroCategoria'
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const [txtbuscar, setTxtbuscar] = useState('');

    const menejoTxt = (event) => {
        setTxtbuscar(event.target.value);

        //console.log(txtbuscar)
    };

    const navigate = useNavigate();
    const manejoEnvio = (event) => {
        event.preventDefault();
        navigate('/busqueda', {
            state: txtbuscar,
        });

    };

    return (
        <nav className="navbar navbar-expand-lg bg-danger">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to={'/inicio'} className="nav-link active" aria-current="page" href="#">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/movil'} className="nav-link" href="#">Movil</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/laptop'} className="nav-link" href="#">Laptops</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/vehiculos'} className="nav-link" href="#">Vehiculos</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/motos'} className="nav-link" href="#">Motorcycle</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/tienda'} className="nav-link" href="#">Tienda</Link>
                        </li>



                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categorias
                            </a>
                            <ul className="dropdown-menu">
                                <FiltroCategoria />
                            </ul>
                        </li>



                        <li className="nav-item">
                            <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search" onSubmit={manejoEnvio}>
                        <input value={txtbuscar} onChange={menejoTxt} className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>



    )
}

export default Header