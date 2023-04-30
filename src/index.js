import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Pricing from './pages/Pricing.jsx'; 
import Contactus from './pages/Contactus.jsx';
import About from './pages/About';
import Support from './pages/Support';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
   <BrowserRouter forceRefresh={true}>
      <Routes>

        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/software-support" element={<Support/>}></Route>
        <Route path="/about-us" element={<About/>}></Route>
        <Route path="/contact-us" element={<Contactus/>}></Route>
        <Route path="/pricing" element={<Pricing/>}></Route>
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
