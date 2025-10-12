import { Link } from "react-router-dom"
import "./index.css"
import { useState } from 'react';

const Header = ({busqueda}) => {
    const [busquedaInput, setBusquedaInput] = useState("")  

    const searchSong = (e) => {
        e.preventDefault()
        busqueda(busquedaInput)
    }


    return(
        <header className='header'>
            <h1>Music Caffe </h1>

            <form onSubmit={searchSong} className="formulario">

                    <input className="buscador" type="search" placeholder="Buscar Artista" value={busquedaInput} onChange={(e) => setBusquedaInput(e.target.value)}/>

                    <button className="butonSearch" type="submit"><i class="bi bi-search"></i></button>

            </form>

            <nav className="menuOptions">
                <Link className="enlace" to="/home" >Inicio</Link> 
                <Link className="enlace" to="/detailSong">Detalles</Link>
            </nav>
        </header>        
    )
}


export default Header
