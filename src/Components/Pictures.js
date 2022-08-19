import React from "react";
import { motion } from 'framer-motion';
import photo1 from '../Assets/brody_scar_camping.JPG';
import photo2 from '../Assets/backflip.JPG'

function Pictures() {
    return (
        <div className="picture-container">
            <motion.img className="photo" src={photo1} alt="Brody and Scarlet"></motion.img>
            <img className="photo2" src={photo2} alt="Backflip"></img>
        </div>  
    );
  }
  
  export default Pictures;