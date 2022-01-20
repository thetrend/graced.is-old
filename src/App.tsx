import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from 'react-router-dom';

import ComingSoon from './components/ComingSoon';
import { Blog } from './components/Blog';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<ComingSoon />} />
        <Route path='blog' element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;
