// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import WordTable from './components/WordTable';
import AddWordForm from './components/AddWordForm'; 
import NotFoundPage from './pages/NotFoundPage';
import GamePage from './pages/GamePage';
import { WordProvider } from './components/WordContext';

function App() {
  return (
    <Router>
      <WordProvider>
        <div className="app-container">
          <Navigation />
          <Header />
          <AddWordForm /> 
          <Routes>
            <Route path="/" element={<WordTable />} />
            <Route path="/game" element={<GamePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Footer />
        </div>
      </WordProvider>
    </Router>
  );
}

export default App;


