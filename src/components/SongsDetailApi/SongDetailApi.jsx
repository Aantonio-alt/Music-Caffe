import axios from "axios"
import { useEffect, useState } from "react"

const SongDetailApi = ({idAlbum}) => {
    const [songDetail, setSongDetail] = useState([])

    useEffect( () => {

        const fetchSongDetail = async () => {
            try {
            const response = await axios.get(`https://www.theaudiodb.com/api/v1/json/123/track.php?m=${idAlbum}`)
            setSongDetail(response.data.track || [])

            } catch (error) {
                console.error(error)
            } finally{
                
            }
        }
        fetchSongDetail()
    }, [idAlbum])

    return (
        <>
            <section>
                {songDetail.map((song) => {
                    console.log(song)

                    const {strArtist, strStyle, strTrack, strAlbum, strDescriptionEN, strTrackThumb} = song

                    return(
                        <>
                            <section key={song.strArtist}>
                                <h2>{strArtist}</h2>
                                <p>{strStyle}</p>
                                <p>{strTrack}</p>
                                <p>{strAlbum}</p>
                                <img src={strTrackThumb} alt="imagen"/>
                            </section>
                        </>
                    )
                })}
            </section>
        </>
    )
}


export default SongDetailApi