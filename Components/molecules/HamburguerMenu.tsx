import React, { useEffect, useRef } from 'react'
import { HamburguerMenuContainer } from '../atoms/HamburguerMenuContainer';
import { HamburguerMenuWrapper } from '../atoms/HamburguerMenuWrapper';
import { HamburguerMenuText } from '../atoms/HamburguerMenuText';
import { HamburguerBackgroundImage } from '../atoms/HamburguerBackgroundImage';
import Router from 'next/router';
// @ts-ignore
import { TweenMax, gsap, Circ, TimelineMax } from 'gsap/dist/gsap';
import { pixelToRem } from '../../utils/pixelToRem';
import * as UNITS from '../../utils/units';

export interface IHamburguerMenu {
  menuName?: string;
  isActive: boolean;
  initial?: boolean;
}

// TODO add type
export const HamburguerMenu = ({ state }: any) => {
  let hamburguerMenu: any = useRef(null);
  let text1: any = useRef(null);
  let text2: any = useRef(null);
  let text3: any = useRef(null);
  let text4: any = useRef(null);
  let imgBackground: any = useRef(null);

  useEffect(() => {
    const hamburguerPosition = generatePageWidth();
    if (state.isActive === false) {      
      handleImageReturn();
      closeMenu(hamburguerPosition);
      gsap.to(hamburguerMenu, { duration: 1, css: { display: "none" } });
    }
    else if (state.isActive === true || (state.isActive === true && state.initial === null)) {      
      gsap.to(hamburguerMenu, { duration: 0, css: { display: "block" } });      
      fadeInText({text1, text2, text3, text4, hamburguerPosition});
    }
  }, [state.isActive]);

  const fadeInText = ({text1, text2, text3, text4, hamburguerPosition}: any) => {
    const openingTl = new TimelineMax();
    openingTl.fromTo(hamburguerMenu, 1, { css: { clipPath: `circle(${pixelToRem(2)} at ${hamburguerPosition} ${pixelToRem(55)})` }} ,{ css: { clipPath: `circle(${pixelToRem(1100)} at ${hamburguerPosition} ${pixelToRem(55)})` }, ease: Circ.easeInOut });    
    openingTl.from([text4, text3, text2, text1], {duration: 0.085, y: 30, opacity: 0, skewY: 2, ease: Circ.easeInOut, stagger: {amount: 0.3}}, "-=.4");
  }

  const closeMenu = (hamburguerPosition: string) => {    
    handleImageReturn();
    TweenMax.to(hamburguerMenu, 1, { css: { clipPath: `circle(${pixelToRem(19)} at ${hamburguerPosition} ${pixelToRem(55)})` }, ease: Circ.easeInOut });
  }

  const generatePageWidth = () => {
    return `${pixelToRem(window.innerWidth - 55)}`;
  }

  const changeRoute = (routeChange: string) => () => {
    if(state.isActive === true){
      state.setState({isActive: !state.isActive})
      Router.push({pathname: routeChange});
    }    
  }  

  const handleImgFadeIn = (imgUrl: string) => {    
    if(state.isActive === true && generatePageWidth() > UNITS.MIN_TABLET_WIDTH){      
      gsap.to(imgBackground, {
        duration: 0,
        display: "block",
        background: `url(${imgUrl}) center center`,        
      });
      gsap.to(imgBackground, {
        backgroundSize: "contain",
        backgroundRepeat: "repeat-x",
        duration: 0.2,
        opacity: 1,
        ease: "power3.inOut"
      })
    }
  }

  const handleImageReturn = () => {
    const fadeOutTimeLine = new TimelineMax();
    fadeOutTimeLine.to(imgBackground, {      
      duration: .2,
      opacity: 0,      
      ease: Circ.easeInOut,      
    });    
    if(state.isActive === false){
      fadeOutTimeLine.to(imgBackground, 0, {
        display: "none"
      })
    }
  }

  return (
    <div>
      <HamburguerBackgroundImage isActive={state.isActive} ref={elem => {imgBackground = elem}}/>
      <HamburguerMenuContainer ref={elem => { hamburguerMenu = elem }}>
        <HamburguerMenuWrapper>  
          <HamburguerMenuText onMouseLeave={() => handleImageReturn()} onMouseEnter={() => handleImgFadeIn("/static/images/hackmty.jpg")} onClick={changeRoute("/")} ref={elem => { text1 = elem }}>Home</HamburguerMenuText>                
          <HamburguerMenuText onMouseLeave={() => handleImageReturn()} onMouseEnter={() => handleImgFadeIn("/static/images/hacksuresteImg.jpg")} onClick={changeRoute("/about")} ref={elem => { text2 = elem }}>About Me</HamburguerMenuText>                
          <HamburguerMenuText onMouseLeave={() => handleImageReturn()} onMouseEnter={() => handleImgFadeIn("/static/images/kayAppImg.jpg")} onClick={changeRoute("/skills")} ref={elem => { text3 = elem }}>Skills</HamburguerMenuText>                
          <HamburguerMenuText onMouseLeave={() => handleImageReturn()} onMouseEnter={() => handleImgFadeIn("/static/images/mexihcVolunteer.jpg")} onClick={changeRoute("/projects")} ref={elem => { text4 = elem }}>Projects</HamburguerMenuText>        
        </HamburguerMenuWrapper>
      </HamburguerMenuContainer>
    </div>
  )
}
