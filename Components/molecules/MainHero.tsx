import React from 'react'
import { useState, useEffect } from 'react';
import { SplashText } from '../atoms/SplashText'
import { MainHeroWrapper } from '../atoms/MainHeroWrapper';
import { DescriptionText } from '../atoms/DescriptionText';
import { BlueBlobImage } from '../atoms/BlueBlobImage';
import { RedBlobImage } from '../atoms/RedBlobImage';
import { OrangeBlobImage } from '../atoms/OrangeBlobImage';
import { Container } from 'next/app';
// @ts-ignore
import blueBlob from '../../static/images/blueBlob.svg';
// @ts-ignore
import redBlob from '../../static/images/redBlob.svg';
// @ts-ignore
import orangeBlob from '../../static/images/orangeBlob.svg';

export const MainHero = () => {
    const [word, setWord] = useState('');
    useEffect(() => {      
      typewriter(["SWE Student", "Book Lover", "Full-Stack Developer", "Passionate Learner"], 600);
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
        <BlueBlobImage src={blueBlob}/>
        <RedBlobImage src={redBlob}/>
        <OrangeBlobImage src={orangeBlob}/>
        <MainHeroWrapper>
          <SplashText>I'm Eyder</SplashText>
          <DescriptionText>a&nbsp;{word}</DescriptionText>
        </MainHeroWrapper>
      </Container>
    )
}
