import React, { Component } from "react";
import Slider from "react-slick";
import { Movie } from "./Movie/Movie";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class Responsive extends Component {
  render() {
    var settings = {
      responsive: [
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 10,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        }
      ]
    };
    return (
        <div className="list_wrapper">
            <div className="header">
                <h1>Movies</h1>
            </div>
            <Slider {...settings}>
                <div className="movies-list">
                    <div>
                        <Movie name="Spirit Untamed" category="Kids" thumbnail="assets/img/movies-thumb/movie1.png"/>
                    </div>
                    <div>
                        <Movie name="Wish Dragon" category="Kids" thumbnail="assets/img/movies-thumb/movie2.png"/>
                    </div>
                    <div>
                        <Movie name="Raya and the Last Dragon" category="Kids" thumbnail="assets/img/movies-thumb/movie3.png"/>
                    </div>
                    <div>
                        <Movie name="Sponge on the Run" category="Kids" thumbnail="assets/img/movies-thumb/movie4.png"/>
                    </div>
                    <div>
                        <Movie name="Turning Red" category="Kids" thumbnail="https://t.ctcdn.com.br/mlV_KEYKSrBOAQIKnItUMkRU03I=/512x288/smart/filters:format(webp)/i569022.jpeg"/>
                    </div>
                </div>
            </Slider>
        </div>
    );
  }
}
