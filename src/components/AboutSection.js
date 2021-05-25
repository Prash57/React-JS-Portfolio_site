import React from 'react';
import home1 from '../img/home1.png';
//styled 
import styled from 'styled-components';
import {About, Description, Image, Hide} from '../styles';
//framer motion
import { motion } from 'framer-motion';
import Wave from './Wave';

const AboutSection = () => {
    return (
       <About>
            <Description>
                <div className="title">
                    <Hide>
                        <motion.h2>We work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <h2>your <span>dreams</span></h2>
                    </Hide>
                    <Hide>
                        <h2>come true.</h2>
                    </Hide>
                </div>
                <p>Contact us for any works related to Photography and Videography. We have group of professionals to transform your idea into reality.</p>
                <button>Contact Us</button>
            </Description>
            <Image>
                <img src={home1} alt="picture of a guy"/>
            </Image>
            <Wave/>
        </About>
    );
};

//styled components



export default AboutSection
