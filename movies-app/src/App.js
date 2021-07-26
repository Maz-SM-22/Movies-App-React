import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import GridDisplay from './components/MovieGrid';

function App() {
  const [state, setState] = useState([]);
  const [filterCategory, setfilterCategory] = useState('');

  async function callAPI() {
    const response = await fetch('http://localhost:2295')
    const data = await response.json()
    setState(data.movies)
  }

  useEffect(() => {
    callAPI();
  }, [])


  return (
    <div className="App">
      <Header movies={state} />
      <Banner />
      <GridDisplay movies={state} />
    </div>
  );
}

export default App;