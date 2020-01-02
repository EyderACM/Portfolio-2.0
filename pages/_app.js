import React from 'react'
import App from 'next/app'
import { Layout } from '../Components/Layouts/Layout';

export default class MyApp extends App {  
  render() {
    const { Component, pageProps } = this.props
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
  }
}