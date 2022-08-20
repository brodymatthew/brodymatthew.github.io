import React from 'react';
import { motion } from 'framer-motion';
import {Link} from 'react-router-dom';
import '../App.css';
import { GoHome } from 'react-icons/go';

function Logo() {
    return (
        <Link to="/" style={{ textDecoration: 'none' }}><GoHome className='gohome'/></Link>
    );
  }
  
  export default Logo;