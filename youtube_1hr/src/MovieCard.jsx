import React from 'react';

// use props to pass data into the function
//instead of having to call it each time, just destructure 'props' by doing the following:
//     Pass something into the {}, which tells it get something out of it
const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
  return (
    <div className="movie" key={imdbID}>
      <div>
        <p>{Year}</p>
      </div>

      <div>
        <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
      </div>

      <div>
        <span>{Type}</span>
        <h3>{Title}</h3>
      </div>
    </div>
  );
}

// MAKE SURE TO EXPORT THIS!!!
export default MovieCard