import Header from "./components/Header/Header";
import './App.css'
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import DetailSong from "./pages/DetailSong.jsx";
import { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar.jsx";

const App = () => {
  const [artistName, setArtistName] = useState("Paradisio")
  const [idAlbum, setIdAlbum] = useState(null)

  const albumSeleccionado = (id) => {
    setIdAlbum(id)
    console.log(id)
  }

  

  return ( 
    <>
      <Header busqueda={setArtistName} />
      <SearchBar artistName={artistName} albumClick={albumSeleccionado}/>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/detailSong" element={<DetailSong idAlbum={idAlbum}/>} />
          <Route path="/" element={<Home />} /> 
        </Routes>
    </>
  )
}

export default App;

