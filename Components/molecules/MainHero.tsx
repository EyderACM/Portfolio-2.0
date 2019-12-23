import React from 'react'
import { useState, useEffect, useRef } from 'react';
import { SplashText } from '../atoms/SplashText'
import { MainHeroWrapper } from '../atoms/MainHeroWrapper';
import { DescriptionText } from '../atoms/DescriptionText';
import { BlueBlobImage } from '../atoms/BlueBlobImage';
import { RedBlobImage } from '../atoms/RedBlobImage';
import { OrangeBlobImage } from '../atoms/OrangeBlobImage';
import { Container } from 'next/app';
import { pixelToRem } from '../../utils/pixelToRem';
// @ts-ignore
import { Circ, Back, TimelineMax, Power3, TweenMax } from 'gsap/dist/gsap';

// @ts-ignore
import blueBlob from '../../static/images/blueBlob.svg';
// @ts-ignore
import redBlob from '../../static/images/redBlob.svg';
// @ts-ignore
import orangeBlob from '../../static/images/orangeBlob.svg';
import { SociallogosContainer } from '../atoms/SocialLogosContainer';
import { SocialBlob } from '../atoms/SocialBlob';

export const MainHero = () => {
    const [word, setWord] = useState('');
    let homeScreen: any = useRef(null);
    let blueBlobElement: any = useRef(null);
    let redBlobElement: any = useRef(null);
    let orangeBlobElement: any = useRef(null);
    let titleText: any = useRef(null);
    let writterText: any = useRef(null);
    let linkedInBlob: any = useRef(null);
    let githubBlob: any = useRef(null);
    let twitterBlob: any = useRef(null);    
    const tl = new TimelineMax({delay: 1});     
        
    const animateOnStartup = () => {                
      TweenMax.to(homeScreen, 0, {css: {visibility: 'visible'}});
      tl.to(blueBlobElement, .8, { left: `${pixelToRem(-220)}`, ease: Circ.easeOut});
      tl.to(redBlobElement, .8, { right: `${pixelToRem(-230)}`, ease: Back.easeOut}, "-=.5");
      tl.to(orangeBlobElement, .8, { left: `${pixelToRem(-220)}`, ease: Circ.easeInOut}, "-=.7");
      tl.from(linkedInBlob, .7, {y: 600, ease: Circ.easeOut});
      tl.from(githubBlob, .7, {y: 600, ease: Circ.easeOut}, "-=.3");
      tl.from(twitterBlob, .7, {y: 600, ease: Circ.easeOut}, "-=.4");
      tl.from(titleText, .8, { opacity: 0, ease: Power3.easeInOut, y:20});
      tl.from(writterText, .8, { opacity: 0, ease: Circ.easeOut}, "-=.2");
    }

    useEffect(() => {            
      typewriter(["SWE Student", "Book Lover", "Full-Stack Developer", "Passionate Learner"], 600);      
      animateOnStartup();
    }, [])    
    const typewriter = (words: string[], wait: any = 3000) => {
      const wordIndex: number = 0;
      const txt = '';           
      let isDeleting = false;           
      setTimeout(() => type({wordIndex, words, isDeleting, txt, wait}), 4000);
    };

    const type = ({wordIndex, words, isDeleting, txt, wait}: any) => {
      const current = wordIndex % words.length;
      const fullTxt = words[current];
      let typeSpeed = 250;
      if(isDeleting){
        txt = fullTxt.substring(0, txt.length - 1);
      } else {
        txt = fullTxt.substring(0, txt.length + 1);
      }
      
      setWord(txt);

      typeSpeed = isDeleting ? typeSpeed/4 :typeSpeed;

      if(!isDeleting && txt === fullTxt){
        typeSpeed = wait;
        isDeleting = true;
      }else if(isDeleting && txt === ''){
        isDeleting = false;
        wordIndex++;
        typeSpeed = 500;
      }

      setTimeout(() => type({wordIndex, words, isDeleting, txt, wait}), typeSpeed);
    }
  
    return (
      <Container>
        <MainHeroWrapper ref={elem => {homeScreen = elem}}>
          <BlueBlobImage ref={elem => {blueBlobElement = elem}} src={blueBlob}/>
          <RedBlobImage ref={elem => {redBlobElement = elem}} src={redBlob}/>
          <OrangeBlobImage ref={elem => {orangeBlobElement = elem}} src={orangeBlob}/>
            <SplashText ref={elem => {titleText = elem}}>I'm Eyder</SplashText>
            <DescriptionText ref={elem => {writterText = elem}}>a&nbsp;{word}</DescriptionText>
            <SociallogosContainer>
              <a ref={elem => {linkedInBlob = elem}} href="https://www.linkedin.com/in/eyderacm/">
                <SocialBlob src="../../static/images/linkedInBlob.svg"/>
              </a>
              <a ref={elem => {githubBlob = elem}} href="https://github.com/EyderACM">
                <SocialBlob src="../../static/images/githubBlob.svg"/>
              </a>
              <a ref= {elem => {twitterBlob = elem}} href="https://github.com/EyderACM">
                <SocialBlob src="../../static/images/twitterInBlob.svg"/>
              </a>
            </SociallogosContainer>
        </MainHeroWrapper>
      </Container>
    )
}
