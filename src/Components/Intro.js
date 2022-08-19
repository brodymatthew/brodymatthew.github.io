import React from 'react';
import { motion } from 'framer-motion';
import front_image from '../Assets/front_image.png';
import front_image2 from '../Assets/front-page-img2.png';
import resume from '/Users/brody/Documents/my-react/my-better-homepage/src/Assets/resume.pdf';

function Intro() {
    return (
        <>
            <div className="intro_wrapper">
                <h3 className="front-page-text">Recent college graduate with a bachelors degree in Criminology and Criminal Justice. Currently in the process of attaining my Google IT Support Professional Certificate offered through Coursera. As such, I am seeking to leverage my competence in technology to fill a position in the industry.</h3>
                <h3 className="front-page-resume">Here is my<a href={resume} download rel="noopener noreferrer" target="_blank">résumé</a>.</h3>
                <img src={front_image} alt="Scarlet and Brody" loading className="front_image"></img>
                {/* <img src={front_image2} alt="On a tree..." className="front_image2"></img> */}
            </div>
        </>
    );
  }
  
  export default Intro;