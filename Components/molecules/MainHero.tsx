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
import { Circ, Back, TimelineMax } from 'gsap/dist/gsap';

// @ts-ignore
import blueBlob from '../../static/images/blueBlob.svg';
// @ts-ignore
import redBlob from '../../static/images/redBlob.svg';
// @ts-ignore
import orangeBlob from '../../static/images/orangeBlob.svg';

export const MainHero = () => {
    const [word, setWord] = useState('');
    let blueBlobElement: any = useRef(null);
    let redBlobElement: any = useRef(null);
    let orangeBlobElement: any = useRef(null);
    let titleText: any = useRef(null);
    let writterText: any = useRef(null);

    const animateOnStartup = () => {        
      const tl = new TimelineMax({});            
      tl.to(blueBlobElement, .8, { left: `${pixelToRem(-220)}`, ease: Circ.easeOut});
      tl.to(redBlobElement, .8, { right: `${pixelToRem(-230)}`, ease: Back.easeOut}, "-=.5");
      tl.to(orangeBlobElement, .8, { left: `${pixelToRem(-220)}`, ease: Circ.easeInOut}, "-=.7");
      tl.from(titleText, .8, { opacity: 0, ease: Circ.easeInOut});
      tl.from(writterText, .8, { opacity: 0, ease: Circ.easeOut}, "-=.2");
      console.log('animando');
    }

    useEffect(() => {      
      typewriter(["SWE Student", "Book Lover", "Full-Stack Developer", "Passionate Learner"], 600);      
      animateOnStartup();
    }, [])    
    const typewriter = (words: string[], wait: any = 3000) => {
      const wordIndex: number = 0;
      const txt = '';           
      let isDeleting = false;           
      type({wordIndex, words, isDeleting, txt, wait});
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
        <BlueBlobImage ref={elem => {blueBlobElement = elem}} src={blueBlob}/>
        <RedBlobImage ref={elem => {redBlobElement = elem}} src={redBlob}/>
        <OrangeBlobImage ref={elem => {orangeBlobElement = elem}} src={orangeBlob}/>
        <MainHeroWrapper>
          <SplashText ref={elem => {titleText = elem}}>I'm Eyder</SplashText>
          <DescriptionText ref={elem => {writterText = elem}}>a&nbsp;{word}</DescriptionText>
        </MainHeroWrapper>
      </Container>
    )
}
