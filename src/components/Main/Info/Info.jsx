import "./Info.scss"

export function Info(){
    return (
        <div className="info_wrapper">

            {/* Movie information TOP */}
            <div className="top">
                <div className="rating">
                    <div className="imdb">
                        <img src="public/assets/img/imdb image.png" alt="IMDb logo" />
                    </div>
                    <div className="rating_number">
                        <span>8.8</span>
                    </div>
                </div>
                <div className="category">
                    <p>2021 - Kids - Movie</p>
                </div>
            </div>

            {/* Movie Logo */}
            <div className="movie-logo">
                <img src="public/assets/img/movie-logo.png" alt="Disney Luca movie logo" />
            </div>

            {/* Movie  */}
            <div className="movie-synopsis">
                <p>Luca and Alberto dream of a life of freedom, a life of adventure — and, most of all, a life with a Vespa to ride.</p>
            </div>

            <div className="watch-now">
                <a href="#" className="button">
                    <span>
                        <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.95 10.5314L14.5836 6.90994C13.1631 6.09902 10.8398 4.77825 9.41636 3.9706L2.81661 0.349105C1.39658 -0.461725 0 0.188635 0 1.79498V22.207C0 23.8078 1.39658 24.461 2.81717 23.6534L9.30021 20.032C10.7236 19.2243 13.1068 17.9036 14.5273 17.0926L20.9237 13.4712C22.3409 12.6603 22.3677 11.339 20.95 10.5313L20.95 10.5314Z" fill="white"/>
                        </svg>
                    </span>
                    Watch Now
                    </a>
            </div>

        </div>
    )
}