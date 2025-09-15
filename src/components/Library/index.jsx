import React from "react";
import Song from "../Song/Song";

const Library = ({library, removeSong}) => {

    return(
        <>
            {library.map((lib => (
                <Song 
                    key={lib.id}
                    name={lib.name}
                    duration={lib.duration}
                    artist={lib.artist}

                    removeSong={() => removeSong(lib.id)}
                />
            )))}
        </>
    )
}

export default Library
