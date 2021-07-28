import React, { useState } from 'react';
// import PageDisplay from './MoviePage';

function GridDisplay(props) {
    const moviesList = props.movies;
    const [selectedMovie, setSelectedMovie] = useState({});
    const [singlePageDisplay, setSinglePageDisplay] = useState(false);

    const selectMovieByImage = (event) => {
        const movie = moviesList.filter((item) => {
            return item.poster === event.target.src;
        });
        setSelectedMovie(movie);
        console.log(selectedMovie[0]._id);
    }

    const selectMovieByTitle = (event) => {
        const movie = moviesList.filter((item) => {
            return item.title === event.target.innerHTML;
        });
        setSelectedMovie(movie);
    }

    function handleSelect(event) {
        if (event.target.localName === "img") {
            selectMovieByImage(event);
        } else if (event.target.localName === "div") {
            selectMovieByTitle(event);
        }
        singlePageDisplay = true;
    }

    return (
        <PageDisplay movie={selectedMovie} />
        // : <>
        //     <div className="row">
        //         <ul className="movies-list">
        //             {moviesList.map((movie, index) => {
        //                 return (
        //                     <li key={index}>
        //                         <div className="poster">
        //                             <img src={movie.poster} onClick={handleSelect} />
        //                         </div>
        //                         <div className="title" onClick={handleSelect}>{movie.title}</div>
        //                     </li>
        //                 )
        //             })}
        //         </ul>
        //     </div>
        // </>
    )

}

// function RatingsLightBox() {
//     return(
//         <div className="poster">
//             <i className="fas fa-star"></i>             // Do something to mulitply this icon by number of stars for movie rating. 
//             <span className="year">{movie.year}</span>             
//         </div>
//     )
// }

export default GridDisplay;