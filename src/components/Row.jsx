import React, {useEffect, useState} from 'react';

import Movie from "./Movie";

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
            <div className='relative flex items-center'>
                <div id="slider" className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                    {movies.length > 0 ?
                        movies.map(movie => <Movie key={movie.id} movie={movie}/>)
                        :
                        null
                    }
                </div>
            </div>
        </>
    );
};

export default Row;