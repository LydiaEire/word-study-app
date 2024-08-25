import React from 'react';
import WordCard from './WordCard';

function WordList({ words }) {
    return (
        <div className="word-list">
            {words.map((wordItem, index) => (
                <WordCard 
                    key={index}
                    {...wordItem} 
                />
            ))}
        </div>
    );
}

export default WordList;


