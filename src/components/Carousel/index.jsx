import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Breakfast from "../Breakfast";
import Dinner from "../Dinner";
import Supper from "../Supper";

export default function Carousel(props) {
    let settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 45000,
        pauseOnHover: false,
        pauseOnFocus: false
    };

    return (
        <Slider {...settings}>
            <Breakfast data={props}/>
            <Dinner />
            <Supper />
        </Slider>
    );
}