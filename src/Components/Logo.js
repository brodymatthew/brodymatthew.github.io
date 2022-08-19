import React from 'react';
import { motion } from 'framer-motion';
import {Link} from 'react-router-dom';
import '../App.css';

function Logo() {
    return (
        <div className="logo-box">
            <Link to="/" style={{ textDecoration: 'none' }}><h1 className="logo">Brody Matthew</h1></Link>
        </div>
    );
  }
  
  export default Logo;