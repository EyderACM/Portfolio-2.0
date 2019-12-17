import React from 'react'
import { Container } from 'next/app';
import { H1 } from '../Components/atoms/H1';
import { createGlobalStyle } from 'styled-components';

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
            <H1>
                Hello world!
            </H1>
        </Container>
    );
}

export default Main;
