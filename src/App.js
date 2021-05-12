import React, { useState }from 'react';
import Search from './components/Search'

function App() {
  const [state, setState] = useState({
    movie:"",
    resule:[],
    selected:{}
  });
  const apiurl = "http://www.omdbapi.com/?i=tt3896198&apikey=92c99205";
  
  const handleInput = (event) => {
    let movie = event.traget.vaule
    setState(preveState => {
      return {...preveState, movie: movie}
    })
  }
  
  return (
    <div className="App">
      <header>
       <h1>Movie App</h1>
      </header>
      <main>
        <Search />
      </main>
    </div>
  );
}

export default App;
