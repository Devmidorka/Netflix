import React, {useEffect, useRef, useState} from 'react';
import {MdChevronLeft, MdChevronRight} from "react-icons/md";

import Movie from "./Movie";

const Row = ({title = '', fetchDataFunction = () => {}}) => {

    const [movies, setMovies] = useState([])
    const sliderRef = useRef(null)

    useEffect(() => {
        fetchDataFunction()
        .then((response) => {
            setMovies(response.data.results)
        })

    }, [])

    const slideLeft = (slider) => {
        slider.scrollLeft -= 500
    }

    const slideRight = (slider) => {
        slider.scrollLeft += 500
    }

    return (
        <>
            <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
            <div className='relative flex items-center group'>
                <MdChevronLeft onClick={() => slideLeft(sliderRef.current)} className='bg-white rounded-full absolute  left-1 opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40}/>
                <div ref={sliderRef} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                    {movies.length > 0 ?
                        movies.map(movie => <Movie key={movie.id} movie={movie}/>)
                        :
                        null
                    }
                </div>
                <MdChevronRight onClick={() => slideRight(sliderRef.current)} className='bg-white rounded-full absolute right-1 opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40}/>
            </div>
        </>
    );
};

export default Row;