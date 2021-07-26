import { React } from 'react'; 

function GridDisplay(props) {    
    const moviesList = props.movies; 
    return(
        <div className="row">
            <ul className="movies-list">
                {moviesList.map((movie, index) => {
                    return (
                        <li key={index}>
                            <div className="poster">
                                <img src={movie.poster} />
                            </div>
                            <div className="title">{movie.title}</div>
                        </li>
                    )
                })}
            </ul>
        </div>
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