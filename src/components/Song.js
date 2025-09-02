import React, {Component} from 'react'

class Song extends Component{
    render () {
        const {artist, duration, title} = this.props

        return(
                <div className='songContainer'>
                    <h2 className='songTitle'>{title}</h2>
                    <div className='containTwo'>
                        <p className='songArtist'><span>Artista: </span> {artist} </p>
                        <p className='songDuration'><span>Duración: </span>{duration} </p>
                    </div>
                </div>
        )
    }
}

export default Song