import React from "react";
import { connect } from "react-redux";
import proptypes from "prop-types";
import { setFavourite } from "../actions";
import "../assets/styles/components/CarouselItem.scss"
import playIcon from "../assets/static/play-icon.png"
import plusIcon from "../assets/static/plus-icon.png"


const CarouselItem = (props) => {
    const {cover, title, year, contentRating, duration} = props;
    const handleSetFavourite = () =>{
        props.setFavourite({
            cover, title, year, contentRating, duration
        })
    }
    return (
        <div className="carousel-item">
            <img className="carousel-item__img" src={cover} alt={title} />
            <div className="carousel-item__details">
                <div>
                    <img className="carousel-item__details--img" src={playIcon} alt="Play Icon" />
                    <img 
                    className="carousel-item__details--img" 
                    src={plusIcon} 
                    alt="Plus Icon" 
                    onClick={handleSetFavourite}
                    />
                </div>
                <p className="carousel-item__details--title">{title}</p>
                <p className="carousel-item__details--subtitle">{
                    `${year} ${contentRating} ${duration}`
                }
                </p>
            </div>
        </div>

    )
}
//Validaciones de PropTypes
CarouselItem.proptypes = {
    cover: proptypes.string,
    title: proptypes.string,
    year: proptypes.number,
    contentRating: proptypes.string,
    duration: proptypes.string
}

const mapDispatchToProps = {
    setFavourite,
}

// export default CarouselItem;
export default connect(null, mapDispatchToProps)(CarouselItem);