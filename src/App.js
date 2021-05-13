import React, { useState }from 'react';
import Search from './components/Search'
import Results from './components/Results'
import Popup from './components/Popup'
import axios from 'axios'
import { BiCameraMovie } from 'react-icons/bi';

function App() {
  const [state, setState] = useState({
    movie:"",
    results:[],
    selected:{}
  });
  const apiurl = "http://www.omdbapi.com/?apikey=dfe6d885";
  
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

  const openPopup = id => {
    axios(apiurl + "&i=" + id).then(({data}) => {
      let result = data;
      console.log(result)

      setState(preveState =>{
        return {...preveState, selected: result }
      });
    });
  }

  const closePopup = () =>{
    setState(preveState =>{
      return {...preveState, selected:{}}
    });
  }
  
  return (
    <div className="App">
      <header>
       <h1><BiCameraMovie className="logo"/>My Movie Database</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search}/>

        <Results results={state.results} openPopup={openPopup}/>
        
        {(typeof state.selected.Title !=='undefined' ) ? <Popup 
        selected={state.selected} 
        closePopup={closePopup}/> : false}
      </main>
    </div>
  );
}

export default App;
