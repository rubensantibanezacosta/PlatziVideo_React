import React from "react";
import { connect } from "react-redux";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import Header from "../components/Header";
import "../assets/styles/App.scss";

// import useInitialState from "../hooks/useInitialState";




const Home = ({ mylist, trends, originals, searchResults }) => {
    // const initialState = useInitialState(API);

    //  return initialState&&initialState.length===0? <h1>Loading...</h1>:(
    return (

        <>
            <Header />
            <Search />

            {


                searchResults && searchResults.length > 0 &&

                <Categories title="Resultados de la búsqueda...">
                    <Carousel>
                        {

                            searchResults.map(item =>
                                <CarouselItem key={item.id}
                                    {...item}

                                />
                            )

                        }
                    </Carousel>
                </Categories>

            }
            {


                searchResults == -1 &&
                
                <Categories isEmpty title="¡NINGUN RESULTADO!">
                </Categories>
            



            }



            {

                /* initialState.mylist && initialState.mylist.length > 0 && */
                (!searchResults.length > 0 || searchResults != -1) && mylist && mylist.length > 0 &&
                <Categories title="Mi Lista">
                    <Carousel>
                        {
                            /* initialState.mylist.map(item =>
                                <CarouselItem key={item.id} {...item} />
                            ) */
                            mylist.map(item =>
                                <CarouselItem key={item.id}
                                    {...item}
                                    isList

                                />
                            )

                        }
                    </Carousel>
                </Categories>
            }
            {
                /* initialState.trends && initialState.trends.length > 0 && */
                (!searchResults.length > 0 && searchResults != -1) && trends && trends.length > 0 &&

                <Categories title="Tendencias">
                    <Carousel>
                        {
                            /* initialState.trends.map(item =>
                                <CarouselItem key={item.id} {...item} />
                            ) */
                            trends.map(item =>
                                <CarouselItem key={item.id} {...item} />
                            )
                        }

                    </Carousel>
                </Categories>
            }
            {
                /* initialState.originals && initialState.originals.length > 0 && */
                (!searchResults.length > 0 && searchResults != -1) && originals && originals.length > 0 &&
                <Categories title="Originales de Platzi Video">
                    <Carousel>
                        {
                            /* initialState.originals.map(item =>
                                <CarouselItem key={item.id} {...item} />
                            ) */
                            originals.map(item =>
                                <CarouselItem key={item.id} {...item} />
                            )
                        }
                    </Carousel>
                </Categories>
            }


        </>

    )
}

const mapStateToProps = state => {
    return {
        mylist: state.mylist,
        trends: state.trends,
        originals: state.originals,
        searchResults: state.searchResults,
    }
};


export default connect(mapStateToProps, null)(Home);