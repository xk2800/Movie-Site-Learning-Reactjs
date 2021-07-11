import React from 'react';

//styles import from GlobalStyle.js
import Header from './components/Header';
import Home from './components/Home';
import {GlobalStyle} from './GlobalStyle';
import Movie from './components/Movie';
import NotFound from './components/NotFound';

//Routes
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Context
import UserProvider from './context';

const App = () => ( 

    <Router>
        <UserProvider>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/:movieId' element={<Movie/>} />
                <Route path='/*' element={<NotFound/>} />
            </Routes>
            <GlobalStyle />
        </UserProvider>
    </Router>
);


export default App;
