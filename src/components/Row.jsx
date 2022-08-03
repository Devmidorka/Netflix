import React, {useEffect, useState} from 'react';
import Slider from "./Slider";

const Row = ({title = '', fetchDataFunction = () => {}}) => {

    const [movies, setMovies] = useState([])
    useEffect(() => {
        fetchDataFunction()
        .then((response) => {
            setMovies(response.data.results)
        })
    }, [])

    return (
        <>
            <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
            <Slider movies={movies}/>
        </>
    );
};

export default Row;