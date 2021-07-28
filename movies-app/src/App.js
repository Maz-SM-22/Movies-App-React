import React, { useState, useEffect } from 'react';
import './App.css';
import { AuthenticationProvider } from "./Authentication";
// import PageDisplay from "./components/MoviePage";
// import Login from "./components/Login";
// import Register from "./components/Register";
import Header from './components/Header';
import Banner from './components/Banner';
import GridDisplay from './components/MovieGrid';

function App() {
  const [state, setState] = useState([]);
  const [filterCategory, setfilterCategory] = useState('');
  const [randomMovie, setRandomMovie] = useState({});

  async function callAPI() {
    const response = await fetch('http://localhost:2295')
    const data = await response.json()
    setState(data.movies)
  }

  useEffect(() => {
    callAPI();
  }, [])

  return (
    <AuthenticationProvider>
      <div className="App">
        <Header movies={state} />
        <Banner />
        <GridDisplay movies={state} />
        {/* <Login />
        <Register /> */}
        {/* <PageDisplay selectedMovie={test} /> */}
      </div>
    </AuthenticationProvider>
  );
}

export default App;


/*
  Things to figure out for Wednesday:

  * What is going on with login?
  * Where the logic should be for the movie page
  * How to pass the one movie based on id to the movie page

*/