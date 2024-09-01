import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import WordTable from './components/WordTable';
import WordCarousel from './components/WordCarousel';
import NotFoundPage from './components/NotFoundPage';

function HomePage({ words }) {
  return (
    <main className="main-content">
      <WordTable words={words} />
    </main>
  );
}

function GamePage({ words }) {
  return (
    <main className="main-content">
      <div className="card-container">
        <WordCarousel words={words} />
      </div>
    </main>
  );
}

function App() {
  const initialWords = [
    { word: 'Hello', transcription: '[həˈloʊ]', translation: 'Привет', topic: 'Greeting' },
    { word: 'Book', transcription: '[bʊk]', translation: 'Книга', topic: 'Education' },
    { word: 'Apple', transcription: '[ˈæpəl]', translation: 'Яблоко', topic: 'Food' },
    { word: 'Banana', transcription: '[bəˈnænə]', translation: 'Банан', topic: 'Food' },
    { word: 'Bread', transcription: '[brɛd]', translation: 'Хлеб', topic: 'Food' },
    { word: 'Cheese', transcription: '[tʃiːz]', translation: 'Сыр', topic: 'Food' },
    { word: 'Milk', transcription: '[mɪlk]', translation: 'Молоко', topic: 'Food' },
    { word: 'Egg', transcription: '[ɛɡ]', translation: 'Яйцо', topic: 'Food' },
    { word: 'Orange', transcription: '[ˈɔrɪndʒ]', translation: 'Апельсин', topic: 'Food' },
    { word: 'Water', transcription: '[ˈwɔtər]', translation: 'Вода', topic: 'Food' },
  ];

  const [words, setWords] = useState(initialWords);

  const updateWord = (index, newWord) => {
    const updatedWords = words.slice();
    updatedWords[index] = newWord;
    setWords(updatedWords);
  };

  return (
    <Router>
      <div className="app-container">
        <Navigation />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage words={words} />} />
          <Route path="/game" element={<GamePage words={words} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

