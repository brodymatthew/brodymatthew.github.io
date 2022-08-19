import React from 'react';
import { motion } from 'framer-motion';
import '../App.css';

function Contact() {
    return (
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} className="contact_content">
            <div>
                <h1>brodymatthew@verizon.net</h1>
                <h1>(+1)443-562-9333</h1>
            </div>
        </motion.div>
    );
  }
  
  export default Contact;