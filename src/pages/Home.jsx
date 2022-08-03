import React from 'react';
import Main from "../components/Main";
import Row from "../components/Row";
import getUpcomingMovies from "../API/getUpcomingMovies";
import getTopRatedMovies from "../API/getTopRatedMovies";
import getPopularMovies from "../API/getPopularMovies";
import getHorrorMovies from "../API/getHorrorMovies";
import getTrendingMovies from "../API/getTrendingMovies";


const Home = () => {
    return (
        <>
            <Main/>
            <Row title='Upcoming' fetchDataFunction={getUpcomingMovies}/>
            <Row title='Top rated' fetchDataFunction={getTopRatedMovies}/>
            <Row title='Trending' fetchDataFunction={getTrendingMovies}/>
            <Row title='Popular' fetchDataFunction={getPopularMovies}/>
            <Row title='Horror' fetchDataFunction={getHorrorMovies}/>
        </>
    );
};

export default Home;