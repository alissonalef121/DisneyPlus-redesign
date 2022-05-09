import "./List.scss"
import { Movie } from "./Movie/Movie";

export function List(){
    return (
        <div className="list_wrapper">
            <div className="header">
                <h1>Movies</h1>
            </div>

            {/* Movies List */}
            <div className="movies-list">
                <Movie name="Spirit Untamed" category="Kids" thumbnail="assets/img/movies-thumb/movie1.png"/>
                <Movie name="Wish Dragon" category="Kids" thumbnail="assets/img/movies-thumb/movie2.png"/>
                <Movie name="Raya and the Last Dragon" category="Kids" thumbnail="assets/img/movies-thumb/movie3.png"/>
                <Movie name="Sponge on the Run" category="Kids" thumbnail="assets/img/movies-thumb/movie4.png"/>
                <Movie name="Turning Red" category="Kids" thumbnail="https://t.ctcdn.com.br/mlV_KEYKSrBOAQIKnItUMkRU03I=/512x288/smart/filters:format(webp)/i569022.jpeg"/>





            </div>
        </div>
    )
}