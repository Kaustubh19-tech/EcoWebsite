import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MyQuest from './pages/MyQuest';
import Treasure from './pages/Treasure';
import Projects from './pages/Projects';

import BritishLibrary from './pages/BritishLibrary';
import MyClicks from './pages/MyClicks';
import EcoVeterans from './pages/EcoVeterans';
import RoyalSociety from './pages/RoyalSociety';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-quest" element={<MyQuest />} />
        <Route path="/treasure" element={<Treasure />} />
        <Route path="/treasure/british-library" element={<BritishLibrary />} />
        <Route path="/treasure/royal-society" element={<RoyalSociety />} />
        <Route path="/treasure/my-clicks" element={<MyClicks />} />
        <Route path="/treasure/eco-veterans" element={<EcoVeterans />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
