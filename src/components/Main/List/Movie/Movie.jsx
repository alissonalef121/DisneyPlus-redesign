import "./Movie.scss"

export function Movie(props){
    return (
        <div className="movie">
            <div className="play">
                <img src="src\img\movie-play-icon.png" alt="Play this movie" />
            </div>
            <div className="info">
                <small className="category">{props.category}</small>
                <p className="name">{props.name}</p>
            </div>
            <div className="background">
                <img src={props.thumbnail}/>
            </div>
        </div>
    ) 
}