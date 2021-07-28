import React, { useState } from 'react';

function PageDisplay(props) {
    const movie = props.selectedMovie;
    return (
        <>
            <div className="top-container">
                <img alt={movie.title} src={movie.poster} />
                <h1>{movie.title}</h1>
                <div className="year">{movie.year}</div>
                <div className="genre">{movie.category}</div>
                <div className="rating">{movie.rating}</div>
                <button>❤ Add to favourites</button>
            </div>
            <p className="synopsis">{movie.plot}</p>
        </>
    )
}

export default PageDisplay;