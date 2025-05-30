import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import Advertisement from './components/Advertisement/Advertisement';
import Cont from './components/Contact/Cont';
import Sub from './components/Sub/Sub';
import News from './components/NewsFeed/News';
import NewApp from './components/App/NewApp';
import Footer from './components/Footer/Footer';
import Help from './components/Page/Help';
import Tariffs from './components/Page/Tariffs';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Advertisement />
              <Cont />
              <Sub />
              <News />
              <NewApp />
            </>
          }
        />
        <Route path="/tariffs" element={<Tariffs/>} />
        <Route path="/subscribe" element={<Sub />} />
        <Route path="/news" element={<News />} />
        <Route path="/help" element={<Help/>} />

      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
