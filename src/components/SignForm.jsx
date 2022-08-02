import React from 'react';
import {Link} from "react-router-dom";
import Button from "./UI/Button";

const SignForm = ({error, handleSubmit, setEmail, setPassword, type}) => {
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
            <Button className='my-4'>{type === 'login' ? 'Sign In' : 'Sign Up'}</Button>
            <div className='flex justify-between items-center text-sm text-gray-500 py-6'>
                <label><input type="checkbox"/> Remember me</label>
                <p>Need Help?</p>
            </div>
            <p className='py-8'>
                <span className='text-gray-600 pr-2'>
                    {type === 'login' ? 'New to Netflix?' : 'Already subscribed to Netflix?'}

                </span>
                {type === 'login' ?<Link to='sign_up'>Sign Up</Link> : <Link to='/login'> Sign In </Link>}

            </p>
        </form>
    );
};

export default SignForm;