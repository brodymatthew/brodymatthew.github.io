import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import App from './App';
import Logo from './Components/Logo';
import Intro from './Components/Intro';
import Mini_nav from './Components/Mini_nav';
import Pictures from './Components/Pictures';
import About from './Components/About';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
      <Logo />
      <Mini_nav />
      <Routes>
        <Route path="/" element={<Intro />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="skills" element={<Skills />}></Route>
        <Route path="contact" element={<Contact />}></Route>
      </Routes>
    </React.StrictMode>
  </BrowserRouter>  
);
