import axios from "axios"
import { useEffect, useState } from "react"


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
                    }, 1000)
                }
            }
            fetchAlbums();

        }, [artistName])

        const itemClickeado = (album) => {
            const idExtraido = album.idAlbum

            albumClick(idExtraido)
        }

                    
        if (isLoading){
            return <p>Buscando Album...</p>;
        }
        if (error){
            return <p>{error}</p>;
        }
                            

    return (
        <>
            <section>
                <h2>Albumes:</h2>
                <section>
                {albums.length > 0 ? (
                albums.map((album) => {
                    const {
                        idAlbum, strArtist, strAlbum, strDescriptionES, strAlbumThumb} = album

                    return(
                        <article 
                        key={idAlbum} 
                        onClick={ () => itemClickeado(album) }>
                            <h2>Album: {strAlbum}</h2>
                            <p>Artista: {strArtist}</p>
                            <p>Descipcion: {strDescriptionES}</p>
                            <img alt="AlbumImage" src={strAlbumThumb} />
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