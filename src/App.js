import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import WordList from './components/WordList';
import './App.css';

function App() {
  const words = [
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

  return (
    <div className="App">
      <Header />
      <main>
        <WordList words={words} />
      </main>
      <Footer />
    </div>
  );
}

export default App;


