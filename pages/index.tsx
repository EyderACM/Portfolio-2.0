import React from 'react'
import { Container } from 'next/app';
import { Navbar } from '../Components/molecules/Navbar';
import { ContentWrapper } from '../Components/atoms/ContentWrapper';
import { createGlobalStyle } from 'styled-components';
import { MainHero } from '../Components/molecules/MainHero';
import CSSRulePlugin from 'gsap/CSSRulePlugin';

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: Montserrat;
    font-display: auto;
    src: url('../../static/fonts/Montserrat-Light.ttf');
    src: url('../../static/fonts/Montserrat-Regular.ttf');
    src: url('../../static/fonts/Montserrat-Bold.ttf');
}
`;

const Main = () => {

    return (
        <Container>
					<head>            
							<link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,700&display=swap" rel="stylesheet"/>
					</head>
					<GlobalStyle />
					<ContentWrapper>					
						<Navbar />
						<MainHero />
					</ContentWrapper>
        </Container>
    );
}

export default Main;
