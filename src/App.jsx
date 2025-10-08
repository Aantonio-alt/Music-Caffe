import Header from "./components/Header/Header";
import './App.css'
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import DetailSong from "./pages/DetailSong.jsx";

const App = () => {
  
  return (
    <>
      <Header />

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/detailSong" element={<DetailSong/>} />
          <Route path="/" element={<Home />} /> 
        </Routes>
    </>
  )
}

export default App;

