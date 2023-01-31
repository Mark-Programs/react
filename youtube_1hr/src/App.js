import { useState, useEffect } from 'react';
import apiKey from './apikey';
import './styles.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard.jsx';

const API_URL = `http://www.omdbapi.com?apikey=${apiKey}`;
// populate search based on current year
const year = new Date().toISOString().substring(0, 4);

const App = () => {
  const [ movies, setMovies ] = useState([]);
  // ^^^^ Define useState as an empty array
  const [ searchTerm, setSearchTerm ] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    
    // with the first line in App, you can remove the log and call the data itself
    // console.log(data.Search);
    console.log(data.Search);
    setMovies(data.Search);
  };
  useEffect( () => {
    searchMovies(year);
  }, []);

  return(
    <div className='app'>
      <h1>MovieQuest</h1>
      
      <div className='search'>
        <input 
          placeholder='Search for movies...'
          value={searchTerm}
          onChange={(e) => {setSearchTerm(e.target.value)}}
        />
        <img 
          src={SearchIcon}
          alt='search'
          onClick={() => {searchMovies(searchTerm)}}
        />

      </div>

      { movies?.length > 0
        ? (
        <div className='container'>
          {movies.map((movie) => (
            <MovieCard movie={movie} /> 
            ))}
        </div>
        ) : ( 
          <div className='empty'>
            <h2>No Movies Found</h2>
          </div> 
        )}
    </div>
  );
};

export default App;