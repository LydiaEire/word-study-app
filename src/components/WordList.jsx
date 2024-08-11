import React from 'react';
import WordCard from './WordCard';

function WordList({ words }) {
return (
    <div className="word-list">
    {words.map((wordItem, index) => (
        <WordCard 
        key={index} 
        word={wordItem.word} 
        transcription={wordItem.transcription} 
        translation={wordItem.translation} 
        topic={wordItem.topic} 
        />
    ))}
    </div>
);
}

export default WordList;

