import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MyQuest from './pages/MyQuest';
import Treasure from './pages/Treasure';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-quest" element={<MyQuest />} />
        <Route path="/treasure" element={<Treasure />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

