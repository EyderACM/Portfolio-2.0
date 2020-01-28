import React from 'react'
import { Container } from 'next/app';
import { createGlobalStyle } from 'styled-components';
import { ContentWrapper } from '../Components/atoms/ContentWrapper';
import { MainHero } from '../Components/molecules/MainHero';
import { ProofText } from '../Components/atoms/ProofText';

const Main = () => {		

		const GlobalStyle = createGlobalStyle`
			html {
				overflow: hidden;			
			}	
		`;		

    return (
        <Container>			
					<GlobalStyle />
					<ContentWrapper>											
							<MainHero />			
							<ProofText>This NextJs site is being built with ❤ by Eyder A. Concha</ProofText>						
					</ContentWrapper>
        </Container>
    );
}

export default Main;
