import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './routes/Landing';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/search" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
