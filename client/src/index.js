import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home"
import Navbar from './components/navbar/Navbar';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
    <Footer/>
  </BrowserRouter>
 
);

