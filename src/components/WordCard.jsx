import React, { useState } from 'react';

function WordCard({ word, transcription, translation, topic }) {
    const [showTranslation, setShowTranslation] = useState(false);

    const getTopicClass = (topic) => topic.toLowerCase();

    const toggleTranslation = () => {
        setShowTranslation(true);
    };

    return (
        <div className={`word-card ${getTopicClass(topic)}`}>
            <h2>{word}</h2>
            <p><em>{transcription}</em></p>
            {showTranslation ? (
                <p className="translation">{translation}</p>
            ) : (
                <button className="show-translation-button" onClick={toggleTranslation}>
                    Показать перевод
                </button>
            )}
            <p><strong>Тема:</strong> {topic}</p>
        </div>
    );
}

export default WordCard;



