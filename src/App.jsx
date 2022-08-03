import React from 'react';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import {Routes, Route} from 'react-router-dom'
import {AuthContextProvider} from "./context/AuthContext";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Account from "./pages/Account";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
    return (
        <AuthContextProvider>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/sign_up' element={<SignUp/>}/>
                <Route path='/account' element={
                    <ProtectedRoute>
                        <Account/>
                    </ProtectedRoute>
                }/>

            </Routes>
        </AuthContextProvider>

    );
};

export default App;