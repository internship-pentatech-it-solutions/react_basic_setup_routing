import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App.jsx';
import Home from './home.jsx';
import About from './about.jsx';
import Contact from './contact.jsx';
// import './index.css';


const Shop = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-200">
      <h1 className="text-4xl font-bold text-gray-800">Welcome to the Home Page</h1>
      <p className="text-lg text-gray-600 mt-4">This is the home page content.</p>
    </div>
  );
};

export default Shop;