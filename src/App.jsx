// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Entry from './pages/Entry';
import Home from './pages/Home';
import Games from './pages/Games';
import Scoreboard from './pages/Scoreboard';
import NotFound from './pages/NotFound';
import ClickParty from './games/ClickParty';
import ReactionGame from './games/ReactionGame';
import SpinnerGame from './games/SpinnerGame';
import ThankYou from './pages/ThankYou';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Entry />} />
        <Route path="/home" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/scoreboard" element={<Scoreboard />} />
        <Route path="/games/click-party" element={<ClickParty />} />
        <Route path="/games/reaction" element={<ReactionGame />} />
        <Route path="/games/spinner" element={<SpinnerGame />} />
        <Route path="/thankyou" element={<ThankYou />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
