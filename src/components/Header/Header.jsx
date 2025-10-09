import { Link } from "react-router-dom"
import "./index.css"
const Header = () => {
    return(
        <header className='header'>
            <h1>Music Caffe </h1>

            <form className="formulario">

                    <input className="buscador" type="search" placeholder="Buscar Artista"/>
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
