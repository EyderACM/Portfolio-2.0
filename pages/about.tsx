import React, { useRef, useEffect } from 'react'
import { AboutmeWrapper } from '../Components/atoms/AboutmeWrapper';
import { AboutHeader } from '../Components/atoms/AboutHeader';
import { AboutDescription } from '../Components/atoms/AboutDescription';
import { AboutTextHighlight } from '../Components/atoms/AboutTextHighlight';
import { AboutRedBlob } from '../Components/atoms/AboutRedBlob';
import { AboutBlueBlob } from '../Components/atoms/AboutBlueBlob';
import { createGlobalStyle } from 'styled-components';
// @ts-ignore
import { Circ, TimelineMax, Power3 } from 'gsap/dist/gsap';
// @ts-ignore
import redBlobImg from '../static/images/redBlob.svg';
// @ts-ignore
import blueBlobImg from '../static/images/blueBlob.svg';
import { pixelToRem } from '../utils/pixelToRem';

const About = () => {
  let aboutmeText: any = useRef(null);
  let redBlob: any = useRef(null);
  let blueBlob: any = useRef(null);
  let p1: any, p2: any, p3: any, p4: any = useRef(null);
  const tl = new TimelineMax({delay: 1});     

  useEffect(() => {
    tl.to(redBlob, .8, { left: `${pixelToRem(-250)}`, ease: Circ.easeOut});
    tl.to(blueBlob, .8, { right: `${pixelToRem(-270)}`, ease: Circ.easeOut}, "-=.5");
    tl.to(aboutmeText, {duration: .3, opacity: 1, y: 10, ease: Power3.inOut});    
    tl.from(p1, {duration: .3, opacity: 0, y: -10, ease: Power3.inOut}); 
    tl.from(p2, {duration: .3, opacity: 0, y: -10, ease: Power3.inOut}); 
    tl.from([p3, p4], {duration: .3, opacity: 0, y: -10, ease: Power3.inOut});     
  }, []);

  const GlobalStyle = createGlobalStyle`  
  html {
    overflow-x: hidden;  
    margin-right: calc(-1 * (100vw - 100%));
  }
`

  return (
    <AboutmeWrapper>
      <GlobalStyle />
      <AboutRedBlob ref={elem => {redBlob = elem}} src={redBlobImg} />
      <AboutBlueBlob ref={elem => {blueBlob = elem}} src={blueBlobImg}/>
      <AboutHeader ref={elem => {aboutmeText = elem}} >About Me</AboutHeader> 
      <AboutDescription ref={elem => {p1 = elem}}>
        Hi, my name is <AboutTextHighlight>Eyder</AboutTextHighlight>, a 21 year old Software Engineering student and Full-Stack Developer
        that enjoys reading books, sharing and working hard.                
      </AboutDescription>
      <br/>            
      <AboutDescription ref={elem => {p2 = elem}}>
        I started programming in <AboutTextHighlight>2012</AboutTextHighlight>, when I wanted to learn game development after playing
        and understanding how games could make one feel. At the moment, I started learning about creating 
        nice experiences for users.
      </AboutDescription>
      <AboutDescription ref={elem => {p3 = elem}}>
        After learning the fundamentals of programming with C# and wanting to experiment in other fields,
        I started working as a freelance graphic designer. That was when I started doing designs for websites.
        While learning and watching patterns for them curiosity grew to the point where I started learning <AboutTextHighlight>web development</AboutTextHighlight>.
      </AboutDescription>
      <AboutDescription ref={elem => {p4 = elem}}>
        Nowdays, 8 years later I continue to be curious and learn more in each opportunity that's presented to me. You can find me
        watching videos on technologies like <AboutTextHighlight>React, NodeJs</AboutTextHighlight> and everything surrounding <AboutTextHighlight>Javascript</AboutTextHighlight>.
        As I started studying software engineering my love for architecture, clean code and development only continued to grow.
        That's why I like to strive to be the very best version of myself in my daily work, studies and life.
      </AboutDescription>
    </AboutmeWrapper>
  )
}

export default About;
