import React from 'react';
import SavedMovies from "../components/SavedMovies";

const Account = () => {
    return (
        <>
            <div className='w-full text-white'>
                <img
                    className='block w-full h-[400px] object-cover'
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/c2578c37-8569-4f88-b8f1-67a26a9ddcdd/33c67853-dd11-42fd-b8ef-87b9cf28e06f/DE-en-20220725-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt=""/>
                <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px] '/>
                <div className='absolute top-[20%] p-4 md:p-8 '>
                    <h1 className='text-3xl md:text-5xl font-bold'>My Movies</h1>
                </div>
            </div>
            <SavedMovies/>
        </>

    );
};

export default Account;