import React, { useEffect, useState } from 'react';
import '../Styles/landing.css';
import Navbar from './navbar';

const words = ['Developer', 'Webdesigner', 'Enthusiast', 'Dog Lover'];

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
    <>
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
    <div className='overlay'></div>
  </div> 
  <div className='secondWrapper'>
    <p className='headingHelpYou'>How can I help you?</p>
    <div className='hidden' id='infoBox'>
        <div className='infoLeft'>
            <p>Things I do</p>
            <ul>
                <li>Front-end</li>
                <li>Back-end</li>
                <li>Web3 / Blockchain</li>
                <li>Smart Contracts</li>
                <li>API calls</li>
                <li>Web Design</li>
                <li>Photoshop</li>
                <li>Wordpress</li>
                <li>Agile Methodology</li>
                <li>Photograph</li>
            </ul>
            <p>Programming languages I know </p>
            <ul>
                <li>HTML5</li>
                <li>CSS/SCSS</li>
                <li>Javascript</li>
            </ul>
        </div>
        <div className='infoRight'>
            <p>Frameworks</p>
            <ul>
                <li>React</li>
                <li>Solidity</li>
            </ul>
            <p>Programs I work in</p>
            <ul>
                <li>Visual Studio Code</li>
                <li>Github/Git</li>
                <li>Truffle</li>
                <li>Photoshop</li>
                <li>Canva</li>
                <li>Figma</li>
                <li>InDesign</li>
            </ul>
        </div>
    </div>
    <p className='headingHelpYou'>Anymore questions?</p>
    <div className='hidden' id='infoBox'>
        <div className='contact'>
            <p>Contact me</p>
            <p>email: <br /> emelieribring@hotmail.com <br /> <br />LinkedIn: emelieribring <br /> Github: emelieribring <br /><br  />Tel: 073 735 35 00</p>
        </div>
    </div>
  </div>
  </>
  );
}

export default Landing;