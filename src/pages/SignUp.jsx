import React from 'react';
import SignForm from "../components/SignForm";
import Modal from "../components/UI/Modal";


const SignUp = () => {
    return (
        <div className='w-full h-screen'>
            <img className='block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/c2578c37-8569-4f88-b8f1-67a26a9ddcdd/33c67853-dd11-42fd-b8ef-87b9cf28e06f/DE-en-20220725-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt=""/>
            <div className='absolute bg-black/60 top-0 left-0 w-full h-screen'/>
            <Modal>
                <h1 className='text-3xl font-bold'>Sign Up</h1>
                <SignForm/>
            </Modal>
        </div>
    );
};

export default SignUp;