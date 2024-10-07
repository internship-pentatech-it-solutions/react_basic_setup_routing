// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
// import navbar from './components/navbar';
// import home from './pages/home'; 
// import about from './pages/about'; 
 


// function App() {
//   return (
//     <div>
//       <Navbar />
//       <Outlet />
//     </div>
//   );
// }

// export default App


import React from 'react';
import { Outlet } from 'react-router-dom'; // Import Outlet


const App = () => {
  return (
    <div>
      <Navbar />
      {/* This will render the nested routes */}
      <Outlet />
    </div>
  );
};

export default App;
