import React from 'react'; // ԱՆՊԱՅՄԱՆ է Vite-ում, եթե չես միացրել automatic JSX runtime
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './components/Header/Header';
import Advertisement from './components/Advertisement/Advertisement';
import Cont from './components/Contact/Cont';
import Sub from './components/Sub/Sub';
import News from './components/NewsFeed/News';
import NewApp from './components/App/NewApp';
import Footer from './components/Footer/Footer';


function App() {


  return (
    <>
      <Header />
      <Advertisement />
      <Cont />
      <Sub />
      <News/>
      <NewApp/>
      <Footer/>
    </>

  );
}

export default App;
