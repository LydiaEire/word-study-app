import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import WordTable from './components/WordTable';
import NotFoundPage from './pages/NotFoundPage';
import GamePage from './pages/GamePage';

function HomePage({ words }) {
  return (
    <main className="main-content">
      <WordTable words={words} />
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
  const [learnedCount, setLearnedCount] = useState(0);

  const updateWord = (index, newWord) => {
    const updatedWords = words.slice();
    updatedWords[index] = newWord;
    setWords(updatedWords);
  };

  const increaseLearnedCount = () => {
    setLearnedCount(prevCount => prevCount + 1);
  };

  return (
    <Router>
      <div className="app-container">
        <Navigation />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage words={words} />} />
          <Route path="/game" element={
            <GamePage
              words={words}
              updateWord={updateWord}
              onTranslationViewed={increaseLearnedCount}
              learnedCount={learnedCount}
            />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
