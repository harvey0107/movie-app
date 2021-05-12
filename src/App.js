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
    let movie = event.target.value
    setState(preveState => {
      return {...preveState, movie: movie}
    });
    console.log(state.movie)
  }
  
  return (
    <div className="App">
      <header>
       <h1>Movie App</h1>
      </header>
      <main>
        <Search handleInput={handleInput} />
      </main>
    </div>
  );
}

export default App;
