import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App.jsx';
import Shop from './shop.jsx'
import About from './about.jsx';
import Contact from './contact.jsx';
// import './index.css';


const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-green-300">
      <h1 className="text-4xl text-white">Welcome to the Home Page</h1>
    </div>
  );
};

export default Home;

