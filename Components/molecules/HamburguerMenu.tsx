import React, { useEffect, useRef } from 'react'
import { HamburguerMenuContainer } from '../atoms/HamburguerMenuContainer';
import { HamburguerMenuWrapper } from '../atoms/HamburguerMenuWrapper';
import { HamburguerMenuText } from '../atoms/HamburguerMenuText';
import Link from 'next/link';
import Router from 'next/router';
// @ts-ignore
import { TweenMax, gsap, Circ, TimelineMax } from 'gsap/dist/gsap';
import { pixelToRem } from '../../utils/pixelToRem';
// @ts-ignore

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

  useEffect(() => {
    const hamburguerPosition = generatePageWidth();
    if (state.isActive === false) {      
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
    TweenMax.to(hamburguerMenu, 1, { css: { clipPath: `circle(${pixelToRem(19)} at ${hamburguerPosition} ${pixelToRem(55)})` }, ease: Circ.easeInOut });
  }

  const generatePageWidth = () => {
    return `${pixelToRem(window.innerWidth - 55)}`;
  }

  const changeRoute = (routeChange: string) => () => {
    //closeMenu(generatePageWidth());
    state.setState({isActive: !state.isActive})
    Router.push({pathname: routeChange});
  }

  return (
    <HamburguerMenuContainer ref={elem => { hamburguerMenu = elem }}>
      <HamburguerMenuWrapper>        
        <HamburguerMenuText onClick={changeRoute("/")} ref={elem => { text1 = elem }}>Home</HamburguerMenuText>                
        <HamburguerMenuText onClick={changeRoute("/about")} ref={elem => { text2 = elem }}>About Me</HamburguerMenuText>                
        <HamburguerMenuText onClick={changeRoute("/skills")} ref={elem => { text3 = elem }}>Skills</HamburguerMenuText>                
        <HamburguerMenuText onClick={changeRoute("/projects")} ref={elem => { text4 = elem }}>Projects</HamburguerMenuText>        
      </HamburguerMenuWrapper>
    </HamburguerMenuContainer>
  )
}
