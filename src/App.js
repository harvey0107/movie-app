import React, { useState }from 'react';
import Search from './components/Search'
import Results from './components/Results'
import axios from 'axios'

function App() {
  const [state, setState] = useState({
    movie:"",
    results:[],
    selected:{}
  });
  const apiurl = "http://www.omdbapi.com/?i=tt3896198&apikey=92c99205";
  
  const search = (event) => {
    if (event.key === "Enter"){
      axios(apiurl + "&s=" + state.movie).then(({data}) => {
          let results = data.Search;

          setState(preveState => {
            return {...preveState, results: results}
          });
        });
    }
   
  }

  const handleInput = (event) => {
    let movie = event.target.value
    setState(preveState => {
      return {...preveState, movie: movie}
    });
    
  }
  
  return (
    <div className="App">
      <header>
       <h1>Movie Database</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search}/>
        <Results results={state.results} />
      </main>
    </div>
  );
}

export default App;
