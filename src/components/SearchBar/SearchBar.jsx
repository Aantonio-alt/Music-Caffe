import axios from "axios"
import { useEffect, useState } from "react"
import "./index.css"
import loadingGift from "../../assets/cargando.gif"
import { Link, useNavigate } from "react-router-dom"
import desconocido from "../../assets/desconocido.png"

const SearchBar = ({artistName , albumClick}) => {
    const [albums, setAlbums] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

        useEffect(() => {
            if (!artistName){
                return 
            }

            const fetchAlbums = async () => {
                setIsLoading(true);
                setError(null);  
                 
                try {
                    const response = await axios.get(`https://www.theaudiodb.com/api/v1/json/123/searchalbum.php?s=${artistName}`);

                    setAlbums(response.data.album || [])

                } catch (error) {
                    console.error(error)
                    setError("Error al cargar datos")
                    setIsLoading(false)
                } finally {
                    setTimeout(() => {
                        setIsLoading(false)
                    }, 500)
                }
            }
            fetchAlbums();

        }, [artistName])

        const navigate = useNavigate()
        const itemClickeado = (album) => {
            const idExtraido = album.idAlbum
            albumClick(idExtraido)
            navigate("/DetailSong")
        }

                    
        if (isLoading){
            return <img src={loadingGift} alt="cargando..."/>;
            
        }
        if (error){
            return <p>{error}</p>;
        }
                            

    return (
        <>
            <section>
                <h2>Albumes:</h2>
                <section className="resultadosBusqueda">
                {albums.length > 0 ? (
                albums.map((album) => {
                    const {
                        idAlbum, strArtist, strAlbum, strDescriptionES, strAlbumThumb, intYearReleased} = album

                    return(
                        <article className="itemBuscado" 
                        key={idAlbum} 
                        onClick={ () => itemClickeado(album) }>
                            <h2>Album: {strAlbum}</h2>
                            <p>Artista: {strArtist}</p>

                            <p>Año: {intYearReleased}</p>

                            <img alt="AlbumImage" src={strAlbumThumb ? (strAlbumThumb) : (desconocido)} />
                        </article>
                    )
                } )
            ) : (
                <p>No se encontro nada</p>
            )
                }
                
                </section>
            </section>
        </>
    )
}

export default SearchBar