import React from 'react';

const WordCard = ({ word }) => (
    <div className="word-card">
        <h3>{word.english} ({word.transcription})</h3>
        <p>{word.russian}</p>
        <p>Теги: {word.tags}</p>
    </div>
);

export default WordCard;



