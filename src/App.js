import React from 'react';
import Search from './components/Search'

function App() {
  const apiurl = "http://www.omdbapi.com/?i=tt3896198&apikey=92c99205"
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
