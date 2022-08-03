import React, {useRef} from 'react';
import {MdChevronLeft, MdChevronRight} from "react-icons/md";
import Movie from "./Movie";


const Slider = ({movies, isMyMoviesSlider, deleteMovies = () => {}}) => {
    const sliderRef = useRef(null)

    const slideLeft = (slider) => {
        slider.scrollLeft -= 500
    }

    const slideRight = (slider) => {
        slider.scrollLeft += 500
    }


    return (
        <div className='relative flex items-center group'>
            <MdChevronLeft onClick={() => slideLeft(sliderRef.current)} className='bg-white rounded-full absolute  left-1 opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40}/>
            <div ref={sliderRef} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                {movies.length > 0 ?
                    movies.map(movie => <Movie key={movie.id} movie={movie} isMyMovie={isMyMoviesSlider} deleteMovies={deleteMovies}/>)
                    :
                    null
                }
            </div>
            <MdChevronRight onClick={() => slideRight(sliderRef.current)} className='bg-white rounded-full absolute right-1 opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40}/>
        </div>
    );
};

export default Slider;