import React from "react"
import Song from "../Song/Song"

const SearchResults = ({songs, addButton, addSongs}) => {
    return(
        <>

            {songs.map((song) => {
                const isAdd = addSongs.some(item => item.id === song.id)

                return(
                    <Song 
                    key={song.id}
                    name={song.name}
                    duration={song.duration}
                    artist={song.artist}

                    addButton={() => addButton(song)}
                    isAdd={isAdd}
                    />
                )
            })}
        </>
    )
}

export default SearchResults    