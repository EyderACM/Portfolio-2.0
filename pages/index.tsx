import React from 'react'
import { Container } from 'next/app';
import { Navbar } from '../Components/molecules/Navbar';
import { ContentWrapper } from '../Components/atoms/ContentWrapper';
import { MainHero } from '../Components/molecules/MainHero';
import { gsap } from "gsap/dist/gsap"
import CSSRulePlugin from 'gsap/CSSRulePlugin';

const Main = () => {		
		gsap.registerPlugin(CSSRulePlugin);

    return (
        <Container>
					<head>            
							<link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,700&display=swap" rel="stylesheet"/>
					</head>					
					<ContentWrapper>					
						<Navbar />
						<MainHero />
					</ContentWrapper>
        </Container>
    );
}

export default Main;
