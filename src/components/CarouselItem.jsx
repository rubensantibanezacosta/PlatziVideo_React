import React from "react";
import { connect } from "react-redux";
import proptypes from "prop-types";
import { setFavourite } from "../actions";
import { deleteFavourite } from "../actions";
import { Link } from "react-router-dom";
import "../assets/styles/components/CarouselItem.scss"
import playIcon from "../assets/static/play-icon.png"
import plusIcon from "../assets/static/plus-icon.png"
import deleteIcon from "../assets/static/remove-icon.png";


const CarouselItem = (props) => {
    const { id, cover, title, year, contentRating, duration, isList } = props;
    const handleSetFavourite = () => {
        props.setFavourite({
            id, cover, title, year, contentRating, duration
        })
    }
    const handleDeleteFavourite = (itemId) => {
        props.deleteFavourite(itemId);
    }
    return (
        <div className="carousel-item">
            <img className="carousel-item__img" src={cover} alt={title} />
            <div className="carousel-item__details">
                <div>
                    <Link to={`/player/${id}`}>
                    <img 
                    className="carousel-item__details--img" 
                    src={playIcon} 
                    alt="Play Icon"
                    />
                    </Link>
                    

                    {isList ?
                        <img
                            className="carousel-item__details--img"
                            src={deleteIcon}
                            alt="delete Icon"
                            onClick={() => handleDeleteFavourite(id)}
                        />
                        :
                        <img
                            className="carousel-item__details--img"
                            src={plusIcon}
                            alt="Plus Icon"
                            onClick={handleSetFavourite}
                        />
                    }


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
    deleteFavourite,
}

// export default CarouselItem;
export default connect(null, mapDispatchToProps)(CarouselItem);