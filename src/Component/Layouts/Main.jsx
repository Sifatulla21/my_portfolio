import React from 'react';
import Home from '../Home';
import Header from './Header';

const Main = () => {
    return (
        <div className="container mx-auto">
            <Header></Header>
            <Home></Home>
        </div>
    );
};

export default Main;