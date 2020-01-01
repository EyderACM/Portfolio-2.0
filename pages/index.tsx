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
		`;

    return (
        <Container>			
					<GlobalStyle />
					<ContentWrapper>					
						<Layout>
							<MainHero />			
							<ProofText>This NextJs site was built with ❤ by Eyder A. Concha</ProofText>
						</Layout>
					</ContentWrapper>
        </Container>
    );
}

export default Main;
