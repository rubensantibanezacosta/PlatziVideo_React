import React from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import Footer from "../components/Footer";
import "../assets/styles/App.scss";
import useInitialState from "../hooks/useInitialState";


const API = "http://localhost:3000/initialState";

const Home = () => {
    const initialState = useInitialState(API);



    return (

        <>
            
            <Search />
            {
                initialState.mylist && initialState.mylist.length > 0 &&
                <Categories title="Mi Lista">
                    <Carousel>
                        {
                            initialState.mylist.map(item =>
                                <CarouselItem key={item.id} {...item} />
                            )
                        }
                    </Carousel>
                </Categories>
            }
            {
                initialState.trends && initialState.trends.length > 0 &&

                <Categories title="Tendencias">
                    <Carousel>
                        {
                            initialState.trends.map(item =>
                                <CarouselItem key={item.id} {...item} />
                            )
                        }

                    </Carousel>
                </Categories>
            }
            {
                initialState.originals && initialState.originals.length > 0 &&
                <Categories title="Originales de Platzi Video">
                    <Carousel>
                        {
                            initialState.originals.map(item =>
                                <CarouselItem key={item.id} {...item} />
                            )
                        }
                    </Carousel>
                </Categories>
            }
            
        </>
    );
}

export default Home;