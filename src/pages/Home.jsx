import SongDetailApi from "../components/SongsDetailApi/SongDetailApi";


function Home ()  {


  return(
        <div className="App">
            <main className="gridContainer">
                <SongDetailApi idAlbum={2109615} />
            </main>
      </div>
  )
}

export default Home;    