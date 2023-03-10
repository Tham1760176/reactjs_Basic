import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './containers/Home';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
