import React from 'react';

function WordCard({ word, transcription, translation, topic }) {
    const getTopicClass = (topic) => topic.toLowerCase();

return (
    <div className={`word-card ${getTopicClass(topic)}`}>
        <h2>{word}</h2>
        <p><em>{transcription}</em></p>
        <p>{translation}</p>
        <p><strong>Тема:</strong> {topic}</p>
    </div>
);
}

export default WordCard;



