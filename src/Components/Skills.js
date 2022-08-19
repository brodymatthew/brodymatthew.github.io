import React from 'react';
import { motion } from 'framer-motion';
import { SiAdobe, SiJava, SiBootstrap, SiReact } from 'react-icons/si';
import { BiGitBranch } from 'react-icons/bi';
import { SiMicrosoftoffice } from 'react-icons/si';
import { CgDebug, CgWebsite } from 'react-icons/cg';

function Skills() {
    return (
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} className="skills_content">
            <div className="CT">
                <h1 className="skills_title">Computers and Technology</h1>
                <ul className="skills_ul">
                    <motion.div whileHover={{ scale: 1.1 }} className="list_item">
                        <CgWebsite />
                        <li>HTML, CSS, and JavaScript</li>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} className="list_item">
                        <SiReact />
                        <li>React</li>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} className="list_item">
                        <SiBootstrap />
                        <li>Bootstrap</li>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} className="list_item">
                        <SiJava />
                        <li>Java</li>
                    </motion.div>    
                    <motion.div whileHover={{ scale: 1.1 }} className="list_item">
                        <BiGitBranch />
                        <li>Git</li>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} className="list_item">
                        <CgDebug />
                        <li>Debugging</li>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} className="list_item">
                        <SiMicrosoftoffice /> 
                        <li>Microsoft Office</li>
                    </motion.div>  
                    <motion.div whileHover={{ scale: 1.1 }} className="list_item">   
                        <SiAdobe />
                        <li>Adobe Creative Suite</li>
                    </motion.div>    
                </ul>
            </div>
        </motion.div>
    );
  }
  
  export default Skills;