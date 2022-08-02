import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useUserAuth} from "../context/AuthContext";
import Button from "./UI/Button";

const Navbar = () => {
    const {user, logOut} = useUserAuth()
    const navigate = useNavigate()
    const handleLogout = async() => {
        try{
            await logOut()
            navigate('/')
        }catch(error){
            console.log(error)
        }
    }
    return (
        <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
            <Link to='/'>
                <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>NETFLIX</h1>
            </Link>
            {user?.email ?
                <div>
                    <Link to='/account'>
                        <button className='text-white pr-4'>Account</button>
                    </Link>
                    <Button onClick={handleLogout}>Logout</Button>
                </div>
                :
                <div>
                    <Link to='/login'>
                        <button className='text-white pr-4'>Sign In</button>
                    </Link>
                    <Link to='/sign_up'>
                        <Button>Sign Up</Button>
                    </Link>
                </div>
            }

        </div>
    );
};

export default Navbar;