import Header from "./components/Header/Header";
import './App.css'
import SearchResults from "./components/SearchResults";
import { useState, useEffect } from "react";
import Library from "./components/Library";
import axios from "axios";

const App = () => {

const songsList = [
    {   id: 1, name: "Daten", artist: "Creepy Nuts", duration: "2:49",
    },{
        id: 2, name: "Spazzmatica Polka", artist: "Kevin Macleod", duration: "1:36",
    },{
        id: 3, name: "Young Girl A", artist: "Siinamota", duration: "3:42",
    },{
        id: 4, name: "Hai Yorokonde", artist: "Kocchi no Kendo", duration: "2:42",
    },{
        id: 5, name: "Bailando", artist: "Paradisio", duration: "3:49",
    },{
        id: 6, name: "I'm Still Standing", artist: "Elton Jhon", duration: "3:03",
    },{
        id: 7, name: "Kiss me Again", artist: "Roy Bee", duration: "2:45",
    },{
        id: 8, name: "It's Going Down Now ", artist: "Creepy Nuts", duration: "3:06",
    }
]

const [addSongs, setAddSongs] = useState([])
const [results, setResults] = useState(songsList)

useEffect(() => {
  console.log(addSongs)
},[addSongs])

const addSongPlayList = (addButton) => {
  if(!addSongs.some(song => song.id === addButton.id)){
    setAddSongs([...addSongs, addButton])

  }
}

const removeSongFromPlaylist = (songToRemoveId) => {
    setAddSongs(addSongs.filter(song => song.id !== songToRemoveId));
}

const peticion = async (searchTerm) => {
  axios.get(`https://www.theaudiodb.com/api/v1/json/123/search.php?s=${searchTerm}`)
  .then(response => {
    console.log(response.data.artists[0].strArtist)
    // setResults(response.data)
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
}
  peticion("paradisio")

  return(
        <div className="App">
          <Header/>
            <main className="gridContainer">
              <section className="generalContainer">
                <h2 className="songs">PlayList</h2>
                <Library library={addSongs} removeSong={removeSongFromPlaylist}/>
              </section>


              <section className="generalContainer">
                <h2 className="songs">Busqueda</h2>
                <SearchResults songs={results} addButton={addSongPlayList} addSongs={addSongs}></SearchResults>

              </section>
            </main>
      </div>
  )
}

export default App;

