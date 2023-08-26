import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register'; 
import NoPage from './pages/NoPage';
import React from 'react';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element = {<Login />} />
                    <Route path='/login' element = {<Login />} />
                    <Route path='/register' element = {<Register />} />
                    <Route path="*" element = {<NoPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;