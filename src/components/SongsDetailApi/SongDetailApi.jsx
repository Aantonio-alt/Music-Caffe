import axios from "axios"
import { useEffect, useState } from "react"
import loadingGift from "../../assets/cargando.gif"

const SongDetailApi = ({idAlbum}) => {
    const [songDetail, setSongDetail] = useState([])
    const [isLoading, setIsLoading] = useState(false) 
    const [error, setError] = useState(null)

    useEffect( () => {  

        const fetchSongDetail = async () => {
            setIsLoading(true) 
            setError(null)

            try {
            const response = await axios.get(`https://www.theaudiodb.com/api/v1/json/123/track.php?m=${idAlbum}`)
            setSongDetail(response.data.track || [])

            } catch (error) {
                console.error(error)
                setError("No se pudieron cargar las canciones de este álbum.")
                setSongDetail([])
            } finally{
                setTimeout(() => {
                    setIsLoading(false)
                 }, 500)
            }
        }
        fetchSongDetail()
    }, [idAlbum])



    return ( {songDetail, isLoading, error}   )
}


export default SongDetailApi