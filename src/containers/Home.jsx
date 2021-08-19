import React from "react";
import { connect } from "react-redux";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import "../assets/styles/App.scss";
// import useInitialState from "../hooks/useInitialState";




const Home = ({ mylist, trends, originals }) => {
    // const initialState = useInitialState(API);



    //  return initialState&&initialState.length===0? <h1>Loading...</h1>:(
    return(

    <>

        <Search />
        {
            /* initialState.mylist && initialState.mylist.length > 0 && */
            mylist && mylist.length > 0 &&
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
            trends && trends.length > 0 &&

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
            originals && originals.length > 0 &&
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
    }
};


export default connect(mapStateToProps, null)(Home);