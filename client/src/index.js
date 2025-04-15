import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home"
import Navbar from './components/navbar/Navbar';
import Interests from './components/Interests/Interests';
import WishList from './components/WishList/WishList';
import Contact from './components/ContactUs/Contact';
import About from './components/About/About';
import Book from './components/Books/Book';
import Projects from './components/Projects/Projects';
import Blogs from './components/Blogs/Blog'
import BlogPage from './components/BlogPage/BlogPage';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/wishlist" element={<WishList />} />
      <Route exact path="/interests" element={<Interests/>}/>
      <Route exact path="/contact" element={<Contact/>}/>
      <Route exact path="/about" element={<About/>}/>
      <Route exact path="/books" element={<Book/>}/>
      <Route exact path="/projects" element={<Projects/>}/>
      <Route exact path='/blogs' element={<Blogs/>}/>
      <Route exact path='/blogpage/:id' element={<BlogPage/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
 
);

