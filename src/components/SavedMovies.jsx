import React, {useEffect, useState} from 'react';
import Slider from "./Slider";
import {useUserAuth} from "../context/AuthContext";
import {db} from "../firebase/firebase";
import {updateDoc, doc, onSnapshot} from "firebase/firestore";

const SavedMovies = () => {
    const [movies, setMovies] = useState([])
    const {user} = useUserAuth()

    useEffect(() => {
      onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
          setMovies(doc.data()?.savedMovies)
      })
    }, [user?.email])

    const deleteMovies = async(id, movieRef) => {
        try{
            const result = movies.filter((item) => item.id !== id)
            await updateDoc(movieRef,  {
                savedMovies: result
            })
        }catch (error){
            console.log(error)
        }
    }


    return (
        <div className='pt-10'>
            <Slider isMyMoviesSlider={true} movies={movies} deleteMovies={deleteMovies}/>
        </div>
    );
};

export default SavedMovies;