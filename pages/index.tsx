import React from 'react'
import { Container } from 'next/app';
import { Navbar } from '../Components/molecules/Navbar';
import { createGlobalStyle } from 'styled-components';
import { ContentWrapper } from '../Components/atoms/ContentWrapper';
import { MainHero } from '../Components/molecules/MainHero';

const Main = () => {		

		const GlobalStyle = createGlobalStyle`
			body{
				overflow: hidden;
			}
		`
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
