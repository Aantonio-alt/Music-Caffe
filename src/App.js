import Header from "./components/Header";
import Song from "./components/Song";
import './App.css'

const App = () => {
  return(
        <div className="App">
          <Header/>
            <main className="gridContainer">
              <section className="generalContainer">
                <h2 className="songs">Titulos</h2>
                  <Song title = "Daten" artist= "Creepy Nuts" duration= "2:49"/>
                  <Song title = "Bling-Bang-Bang-Born" artist= "Creepy Nuts" duration= "2:52"/>
                  <Song title = "My Ordinary Life" artist= "The Living Tombstone" duration= "4:05"/>
                  <Song title = "It's Going Down Now" artist= "Azumi Takahashi" duration= "3:06"/>
                  <Song title = "Be a flower" artist= "Ryokuoushoku Shakai" duration= "3:19"/>
              </section>
            </main>
      </div>
  )
}

export default App;

