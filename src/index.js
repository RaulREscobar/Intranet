import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import EditProfile from './pages/EditProfile';
import Home from './pages/Home';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path='/home' element={<Home />} />
            <Route path='/editProfile' element={<EditProfile />}/>
        </Routes>
    </BrowserRouter>,  
);
