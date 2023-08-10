import React from 'react';
import './App.css';
import './utilities.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import Feed from './pages/Feed';
import Search from './pages/Search';
import Create from './pages/Create';
import Logout from './pages/Logout';
import Login from './components/Login/index';

function App() {
    const isLoggedIn = localStorage.getItem('token');
    if(isLoggedIn){
        return (
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<AppLayout />}>
                        <Route index element={<Feed />} />
                        <Route path='/search' element={<Search />} />
                        <Route path='/post' element={<Create />} />
                        <Route path='/logout' element={<Logout />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        );
    } 
    else{
        return(
        <Login/>
        )
    }   
}

export default App;
