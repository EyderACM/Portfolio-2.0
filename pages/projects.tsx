import React, { useRef, useEffect, useLayoutEffect, lazy, Suspense } from 'react'
import { AboutmeWrapper } from '../Components/atoms/AboutmeWrapper'
import { ProjectsSectionTitle } from '../Components/atoms/ProjectsSectionTitle'
import { Project } from '../Components/molecules/Project';
import { pixelToRem } from '../utils/pixelToRem';
import { createGlobalStyle } from 'styled-components';

// @ts-ignore
import bepensaWorld from '../static/images/projects/bepensaWorld.webp';
// @ts-ignore
import frugalist from '../static/images/projects/frugalist.webp';
// @ts-ignore
import kayapp from '../static/images/projects/kayapp.webp';
// @ts-ignore
import linkedon from '../static/images/projects/linkedOn.webp';
// @ts-ignore
import baseConverter from '../static/images/projects/calculator.webp';
// @ts-ignore
import { Circ, TimelineMax, TweenMax } from 'gsap/dist/gsap';
// @ts-ignore
import blueBlobImg from '../static/images/blueBlob.svg';
// @ts-ignore
import orangeBlobImg from '../static/images/orangeBlob.svg';
// @ts-ignore
import redBlobImg from '../static/images/redBlob.svg';

import { ProjectBlob } from '../Components/atoms/ProjectBlob';

const Projects = () => {

  // Add lazy loading  

  // To change blobs to different ones
  let blueBlob: any = useRef(null);
  let orangeBlob: any = useRef(null);
  let redBlob: any = useRef(null);  
  const elref: any = useRef([]);

  const tl = new TimelineMax({delay: 1}); 
  const GlobalStyle = createGlobalStyle`  
  html {
    overflow-x: hidden;      
    margin-right: calc(-1 * (100vw - 100%));
  }
  `   

  useEffect(() => {
    tl.to(blueBlob, .6, { left: `${pixelToRem(-300)}`, ease: Circ.easeOut});    
    tl.to(orangeBlob, .6, { right: `${pixelToRem(-250)}`, ease: Circ.easeOut});    
    tl.to(redBlob, .6, { left: `${pixelToRem(-300)}`, ease: Circ.easeOut});  
    if(elref.current){
      elref.current.map((element: any) => {
        tl.from(element, .7, {y: 30, opacity: 0, ease: Circ.easeInOut}, "-=.4");
      });
      return;
    }
  }, []);  

  const projects = [
  {
    projectTitle: "Bepensa World",
    projectDescription: `This project was developed using Flutter for the hackathon "Hacksureste", it
    determines which convenience stores are potential clients within certain range, calculated
    with both a national and business database.
    This way simplifying the process of looking for clients to a national beverages chain.`,
    projectImage: bepensaWorld
  },
  {
    projectTitle: "Base Converter",
    projectDescription: `A React-Native app made using styled-components. It converts any base16 to another base16 number providing a quick transforming tool for students' use.`,
    projectImage: baseConverter
  },
  {
    projectTitle: "Kayapp",
    projectDescription: `This system was developed after a project presented at a social good project competition.
    It allows fisherman to sell their product without and intermediary and provides a better management and interaction
    with their potential buyers. It uses loopback 4 as an API and a client implemented with Handlebars and Tailwind`,
    projectImage: kayapp
  },
  {
    projectTitle: "Frugalist",
    projectDescription: `This application determines the price of a certain object in different supermarkets in Mexico, 
    it was developed with Flutter, and it implements a web scraper made with NodeJs, and an image 
    classifier with tensorflowJs to detect a product by its photo and determine its price.`,
    projectImage: frugalist
  },  
  {
    projectTitle: "LinkedOn",
    projectDescription: `An under construction Full-Stack React made webapp that uses Mongodb, Nodejs, Typescript, Redux and Styled-Components. 
    A social-media that provides students in your area a place to share their learning and growth in their career.`,
    projectImage: linkedon
  }   
]  

  return (
    <AboutmeWrapper>      
      <GlobalStyle />
      <ProjectBlob ref={el => {blueBlob = el}} src={blueBlobImg} width={550} top={-60} left={-450}/>
      <ProjectBlob ref={el => {orangeBlob = el}} src={orangeBlobImg} width={400} top={620} right={-400}/>
      <ProjectBlob ref={el => {redBlob = el}} src={redBlobImg} width={500} top={1700} left={-500}/>
      <ProjectsSectionTitle>Projects</ProjectsSectionTitle>
      <div>
        {projects.map((singleProject, index) => {          
          return <div className="project" ref={(el: any) => {elref.current[index] = el}}><Project projectTitle={singleProject.projectTitle} projectDescription={singleProject.projectDescription} projectImage={singleProject.projectImage}/></div>
        })}
      </div>
    </AboutmeWrapper>
  )
}

export default Projects
