import React from 'react';
import {
  BrowserRouter as Router, Routes, Route, Navigate,
} from 'react-router-dom';
import Greeting from './components/Greeting';

const App = () => (
    <Router>
      <Routes>
        <Route path="/random_greeting" element={<Greeting />} />
        <Route path="/" element={<Navigate replace to="/random_greeting" />} />
      </Routes>
    </Router>
);

export default App;
