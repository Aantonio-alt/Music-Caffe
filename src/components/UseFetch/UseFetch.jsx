import axios from "axios"
import { useEffect, useState } from "react"
import desconocido from "../../assets/desconocido.png"
import loadingGift from "../../assets/cargando.gif"

const UseFetch = ({idAlbum}) => {
    const [detallesAlbum, setDetallesAlbum] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    
    useEffect(() =>{
        if (!idAlbum) {
            return
        }
        const mostrarDetalles = async () => {
            setIsLoading(true)
            setError(null)


            try {
                    const response = await axios.get(`/api/v1/json/123/album.php?m=${idAlbum}`)

                    setDetallesAlbum(response.data.album || [])


            } catch (error) {
                console.log(error)
                setError("Error al cargar datos")
                setIsLoading(false)               
            } finally {
                setTimeout(() => {
                    setIsLoading(false)
                }, 500)
            }
        }
        mostrarDetalles()
    }, [idAlbum])

        if (isLoading){
            return <img src={loadingGift} alt="cargando..."/>;
            
        }
        if (error){
            return <p>{error}</p>;
        } 

    return (
        <>
            {detallesAlbum.map((detail) => {
                console.log(detail)
                const {strAlbum, strArtist, intYearReleased, strAlbumThumb, strDescriptionEN, strGenre, idAlbum} = detail;

                return (
                    <section key={idAlbum}>
                        <h2>{strAlbum}</h2>

                        <p>Artista: {strArtist ? (strArtist) : ("Desconocido")}</p>

                        <p>Año: {intYearReleased ? (intYearReleased) : ("Desconocido")}</p>

                        <p>Genero: {strGenre ? (strGenre) : ("Desconocido")}</p>

                        <p>Descripción: {strDescriptionEN ? (strDescriptionEN) : ("Desconocido")}</p>
                        
                        <img src={strAlbumThumb ? (strAlbumThumb) : (desconocido)} alt="Album Imagen" />

                    </section>
                )
            })}
        
        
        </>
    )
}


export default UseFetch