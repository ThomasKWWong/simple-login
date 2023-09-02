import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register'; 
import Test from './pages/Test'
import Welcome from './pages/Welcome';
import Contact from './pages/Contact';
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
                    <Route path='/welcome' element = {<Welcome />} />
                    <Route path='/contact' element ={<Contact />} />
                    <Route path='/testing' element = {<Test />} />
                    <Route path="*" element = {<NoPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;