import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useUserAuth} from "../context/AuthContext";
import Button from "./UI/Button";

const SignForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {signUp} = useUserAuth()
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const handleSubmit = async(event) => {
        event.preventDefault()
        setError('')
        try{
            await signUp(email, password)
            navigate('/')
        }catch(error){
            console.log(error)
            setError(error.message)
        }
    }


    return (
        <form className='w-full flex flex-col py-4' onSubmit={handleSubmit}>
            {error ? <p className='p-3 bg-red-400 my-2'>{error}</p> : null }
            <input
                onChange={(e) => setEmail(e.target.value)}
                className='p-3 my-2 bg-gray-700 rounded'
                type="email"
                placeholder='Email'
                autoComplete='email'
            />
            <input
                onChange={(e) => setPassword(e.target.value)}
                className='p-3 my-2 bg-gray-700 rounded'
                type="password"
                placeholder='Password'
                autoComplete='password'
            />
            <Button className='my-4'>Sign Up</Button>
            <div className='flex justify-between items-center text-sm text-gray-500 py-6'>
                <label><input type="checkbox"/> Remember me</label>
                <p>Need Help?</p>
            </div>
            <p className='py-8'>
                <span className='text-gray-600 pr-2'>Already subscribed to Netflix?</span>
                <Link to='/login'>
                    Sign In
                </Link>
            </p>
        </form>
    );
};

export default SignForm;