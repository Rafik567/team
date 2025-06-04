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
import Wifiy from './components/Page/Wifiy';
import Services from './components/Page/Services';
function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <BrowserRouter>
        <Header />

        {/* Բովանդակության մասը կաճի ըստ էջի բովանդակության */}
        <main className="flex-grow">
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
            <Route path="/tariffs" element={<Tariffs />} />
            <Route path="/help" element={<Help />} />
            <Route path="/internet" element={<Wifiy />} />
            <Route path="/services" element={<Services/>} />

          </Routes>
        </main>

        {/* Footer-ը միշտ ներքևում կլինի */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}


export default App;
