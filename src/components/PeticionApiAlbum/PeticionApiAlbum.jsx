import axios from "axios"
import { useEffect, useState } from "react"


const PeticionApiAlbum = ({idAlbum}) => {
    const [detallesAlbum, setDetallesAlbum] = useState([])

    useEffect(() =>{
        const mostrarDetalles = async () => {
            try {
                    const response = await axios.get(`https://theaudiodb.com/api/v1/json/2/album.php?m=${idAlbum}`)

                    setDetallesAlbum(response.data.album || [])
                    
            } catch (error) {
                console.log(error)
            } 
        }
        mostrarDetalles()
    }, [idAlbum])

    return (
        <>
            {detallesAlbum.map((detail) => {
                console.log(detail.strAlbum)
                const {strAlbum, strArtist, intYearReleased, strAlbumThumb, strDescriptionEN, strGenre, idAlbum} = detail;

                return (
                    <section key={idAlbum}>
                        <h2>{strAlbum}</h2>
                        <p>{strArtist}</p>
                        <p>{intYearReleased}</p>
                        <p>{strGenre}</p>
                        <p>{strDescriptionEN}</p>
                        <img src={strAlbumThumb} alt="Album Imagen" />
                    </section>
                )
            })}
        
        
        </>
    )
}


export default PeticionApiAlbum