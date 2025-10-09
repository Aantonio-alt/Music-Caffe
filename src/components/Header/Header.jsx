import { Link } from "react-router-dom"

const Header = () => {
    return(
        <header className='header'>
            <h1>Music Caffe </h1>

            <form className="formulario">
                <label> Buscar:
                    <input type="search" placeholder="Buscar Artista"/>
                    <button type="submit"><i class="bi bi-search"></i></button>
                </ label>
            </form>

            <nav className="menuOptions">
                <Link to="/home" >Inicio</Link> 
                <Link to="/detailSong">Detalles</Link>
            </nav>
        </header>        
    )
}


export default Header
