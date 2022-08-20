import React from 'react';
import { motion } from 'framer-motion';
import '../App.css';
import image_grad from './Assets/education_pic.jpeg';
import image_brodyscar from './Assets/brody&scarlet.jpg';

function About() {
    return (
        <div className="aboutme_content">
            <p className="p1">I am from Annapolis, a small town that resides in Maryland with lots of sailing. I grew up playing many sports such as soccer, hockey, lacrosse, baseball, and I even swam competitively. I have a lovely pal in my German Shepherd, Scarlet. She is 3 years old and she’s better at sports than I am.</p>
            <p className="p2">After graduating from the University of Maryland in May of 2022, I began a self-study focused on computer science. During this time, I utilized various online resources to supply my many curiosities. Some of the topics I studied and engaged in included web development & design, cybersecurity, and software development.</p>
            <img src={image_grad} className="img-grad" alt="Graduation Pic"></img>
            <img src={image_brodyscar} className="img-scar" alt="Brody and Scarlet"></img>
        </div>   
    );
  }
  
  export default About;