'use client'
import React, { Children } from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import RootLayout from '../layout';
import Home from './Home/HomeScreen2'

export default function HomePage() {
  return (
    <RootLayout>
     <Header/>
     <Home/>
     <Footer/>
    </RootLayout>
  );
}
