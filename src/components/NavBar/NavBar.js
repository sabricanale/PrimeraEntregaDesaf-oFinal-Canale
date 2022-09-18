import React from 'react'
import logo from '../Assets/LogoRastro.png'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navBar-contenedor navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
                <NavLink to='/'>
                    <img src={logo} className='App-logo' alt='logo'/>
                </NavLink>
        </div>

        <div className="navBar-texto">
            <ul className="navbar-nav collapse me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <NavLink to='/' style= {({isActive})=> 
                    isActive ? {fontWeight:'bold', color:'black', textDecoration:'none'} : {color:'black', textDecoration:'none'}}>Inicio</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/categoria/Indumentaria' style= {({isActive})=> 
                        isActive ? {fontWeight:'bold', color:'black', textDecoration:'none'} : {color:'black', textDecoration:'none'}}>Indumentaria</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/categoria/Accesorios' style= {({isActive})=> 
                    isActive ? {fontWeight:'bold', color:'black', textDecoration:'none'} : {color:'black', textDecoration:'none'}}>Accesorios</NavLink>
                </li>
            </ul>
        </div>

        <div>
            <CartWidget/>
        </div>  
    </nav>

  )
}

export default NavBar