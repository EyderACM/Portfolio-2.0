import React from 'react'
import { Container } from 'next/app'
import { Navbar } from '../molecules/Navbar'

export const Layout = ({children}: {children:JSX.Element[] | JSX.Element}) => {
  return (
    <Container>
      <head>            
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,700&display=swap" rel="stylesheet"/>
      </head>		
      <Navbar />
      {children}
    </Container>
  )
}
