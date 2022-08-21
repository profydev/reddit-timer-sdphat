import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './commons/Footer';
import Header from './commons/Header';
import Landing from './routes/Landing';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/search" />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
