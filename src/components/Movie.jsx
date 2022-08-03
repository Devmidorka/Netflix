import React, {useState} from 'react';
import {FaHeart, FaRegHeart} from "react-icons/fa";
import {useUserAuth} from '../context/AuthContext'
import {db} from "../firebase/firebase";
import {arrayUnion, doc, updateDoc} from "firebase/firestore"
import {AiOutlineClose} from 'react-icons/ai'

const Movie = ({movie, isMyMovie= false, deleteMovies = () => {}}) => {

    const [like, setLike] = useState(false);
    const {user} = useUserAuth()

    const movieID = doc(db, 'users', `${user?.email}`)


    const saveMovie = async () => {
        if(!user?.email){
            alert('Please login')
            return
        }
        setLike((prev) => !prev)
        await updateDoc(movieID, {
            savedMovies: arrayUnion({
                id: movie.id,
                title: movie.title,
                backdrop_path: movie.backdrop_path
            })
        })
    }

    const movieRef = doc(db, 'users', `${user?.email}`)

    return (
        <div
            className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] cursor-pointer inline-block relative p-2'
        >
            {movie?.backdrop_path &&
                <>
                    <img
                        src={`https://image.tmdb.org/t/p/w300${movie?.backdrop_path}`}
                        alt={movie.title}
                    />
                    <div
                        className="absolute top-0 left-0 w-full h-full opacity-0 text-white  hover:bg-black/80 hover:opacity-100 "
                    >
                        <p className='text-xs md:text-sm font-bold flex justify-center items-center h-full text-center whitespace-normal px-3'>
                            {movie?.title}
                        </p>
                        {isMyMovie ?
                            <p onClick={() => deleteMovies(movie.id, movieRef)} className='absolute text-gray-300 top-4 right-4'><AiOutlineClose/></p>
                            :
                            <p onClick={saveMovie}>
                                {like ?
                                    <FaHeart className='absolute top-4 left-4 text-gray-300'/>
                                    :
                                    <FaRegHeart  className='absolute top-4 left-4 text-gray-300'/>
                                }
                            </p>
                        }

                    </div>
                </>
            }
        </div>
    );
};

export default Movie;