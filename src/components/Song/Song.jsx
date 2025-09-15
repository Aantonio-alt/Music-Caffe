
const Song = ({artist, duration, name, addButton, removeSong, isAdd}) => {
    return(
        <div className='songContainer'>

            <h2 className='songTitle'>{name}</h2>
            <div className='containTwo'>
                <p className='songArtist'><span>Artista: </span> {artist} </p>
                <p className='songDuration'><span>Duración: </span>{duration} </p>
            </div>

                <div className="buttonContainer">


                    {addButton && (
                        isAdd ? (
                        <button disabled onClick={addButton} className="addButton"><i class="bi bi-folder-check"></i></button>  )
                     : ( <button onClick={addButton} className="addButton"><i class="bi bi-folder-plus"></i></button> )
                     )}

                    {removeSong ? (
                        <button onClick={removeSong} className="addButton"><i class="bi bi-trash"></i></button> 
                    ) : null }
                </div> 

        </div>
    )
}


export default Song

