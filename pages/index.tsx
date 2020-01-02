import React from 'react'
import { Container } from 'next/app';
import { Layout } from '../Components/Layouts/Layout';
import styled, { createGlobalStyle } from 'styled-components';
import { ContentWrapper } from '../Components/atoms/ContentWrapper';
import { MainHero } from '../Components/molecules/MainHero';

const Main = () => {		

		const GlobalStyle = createGlobalStyle`
			body{
				overflow: hidden;
			}	
		`

		const ProofText = styled.h3`
			font-family: Montserrat;			
			font-weight: 300;
			font-size: 12px;
			text-align: center;		
			bottom: 10%;	
			position: absolute;
			bottom: 0;
			margin-bottom: 20px;
			left: 25%;
			right: 25%;
		`;		

    return (
        <Container>			
					<GlobalStyle />
					<ContentWrapper>											
							<MainHero />			
							<ProofText>This work-in-progress NextJs site is being built with ❤ by Eyder A. Concha</ProofText>						
					</ContentWrapper>
        </Container>
    );
}

export default Main;
