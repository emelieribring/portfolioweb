import React, { useEffect, useState } from 'react';
import '../Styles/landing.css';
import Navbar from './navbar';

const words = ['Developer', 'Web Designer', 'Enthusiast', 'Dog Lover'];

function Landing() {

    const [currentWord, setCurrentWord] = useState(words[0]);

    useEffect(() => {
      let currentIndex = 0;
  
      const interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % words.length;
        setCurrentWord(words[currentIndex]);
      }, 2500); 
  
      return () => clearInterval(interval);
    }, []);

  return (
  <div className='wrapper'>
    <Navbar/>
    <div className='frontPage'>
        <div className='frontText'>
            <h1 className='hidden'>Hi! <span>My name is</span> <br /> Emelie <span>I am a</span> <br />{currentWord}</h1>
            <button className='hidden' id='workBtn'>Work With Me</button>
        </div>
        <div className='frontPic'>
            <button id='btnOne' className='btns'>Get to know me</button>
            <button id='btnTwo' className='btns'>Questions?</button>
            <button id='btnThree' className='btns'>Projects</button>
            <button id='btnFour' className='btns'>Wanna know my dog?</button>
        </div>
    </div>
  </div> 
  );
}

export default Landing;