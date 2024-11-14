import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from './Components/pages/aboutUs';
import Blogs from './Components/pages/blogs';
import ContactUs from './Components/pages/contactUs';
import Footer from './Components/pages/footer';
import Header from './Components/pages/header';
import Navbar from './Components/pages/navbar';
import Projects from './Components/pages/projects';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <Projects />
      <Blogs />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
