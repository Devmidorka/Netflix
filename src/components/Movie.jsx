import React, {useState} from 'react';
import {FaHeart, FaRegHeart} from "react-icons/fa";

const Movie = ({movie}) => {

    const [like, setLike] = useState(false);

    return (
        <div
            className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] cursor-pointer inline-block relative p-2'
        >
            {movie?.backdrop_path &&
                <>
                    <img
                        src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
                        alt={movie.title}
                    />
                    <div
                        className="absolute top-0 left-0 w-full h-full opacity-0 text-white  hover:bg-black/80 hover:opacity-100"
                    >
                        <p className='text-xs md:text-sm font-bold flex justify-center items-center h-full text-center whitespace-normal px-3'>
                            {movie?.title}
                        </p>
                        <p onClick={() => setLike((prev) => !prev) }>
                            {like ?
                                <FaHeart className='absolute top-4 left-4 text-gray-300'/>
                                :
                                <FaRegHeart  className='absolute top-4 left-4 text-gray-300'/>
                            }
                        </p>
                    </div>
                </>
            }
        </div>
    );
};

export default Movie;