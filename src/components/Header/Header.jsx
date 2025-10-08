import { Link } from "react-router-dom"

const Header = () => {
    return(
        <header className='header'>
            <h1>Music Caffe </h1>
            <nav>
                <Link to="/home" >Inicio</Link> 
                <Link to="/detailSong">Detalles</Link>
            </nav>
        </header>        
    )
}


export default Header
