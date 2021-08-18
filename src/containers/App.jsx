import React from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import Footer from "../components/Footer";
import "../assets/styles/App.scss";
import { useEffect, useState } from "react";


const App = () => {
    const [videos, setVideos] = useState({ mylist: [], trends: [], originals: [] });

    useEffect(() => {
        fetch("http://localhost:3000/initialState")
            .then(response => response.json())
            .then(data => setVideos(data))
            .then(console.log(videos))
            .catch(err => console.error(err))
    }, []);





    return (

        <div className="App">
            <Header />
            <Search />
            {
                videos.mylist.length > 0 &&
                <Categories title="Mi Lista">
                    <Carousel>
                        <CarouselItem />
                    </Carousel>
                </Categories>
            }
            {
                videos.trends.length > 0 &&

                <Categories title="Tendencias">
                    <Carousel>
                        {
                            videos.trends.map(item =>
                                <CarouselItem key={item.id} {...item} />
                            )
                        }

                    </Carousel>
                </Categories>
            }
            {
                videos.originals.length > 0 &&
                <Categories title="Originales de Platzi Video">
                    <Carousel>
                    {
                            videos.originals.map(item =>
                                <CarouselItem key={item.id} {...item} />
                            )
                        }
                    </Carousel>
                </Categories>
            }
            <Footer />
        </div>
    );
}

export default App;