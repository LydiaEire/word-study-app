import React, { useState, useEffect, useRef } from 'react';

function WordCard({ word, transcription, translation, topic, children, onTranslationViewed }) {
    const [showTranslation, setShowTranslation] = useState(false);
    const buttonRef = useRef(null);

    const getTopicClass = (topic) => {
        return topic.toLowerCase().replace(/\s+/g, '-');
    };

    const toggleTranslation = () => {
        if (!showTranslation) {
            onTranslationViewed();
        }
        setShowTranslation(true);
    };

    useEffect(() => {
        setShowTranslation(false);
        if (buttonRef.current) {
            buttonRef.current.focus();
        }
    }, [word]);

    return (
        <div className={`word-card ${getTopicClass(topic)}`}>
            <h2>{word}</h2>
            <p><em>{transcription}</em></p>
            {showTranslation ? (
                <p className="translation">{translation}</p>
            ) : (
                <button
                    className="show-translation-button"
                    onClick={toggleTranslation}
                    ref={buttonRef} 
                >
                    Показать перевод
                </button>
            )}
            <p><strong>Тема:</strong> {topic}</p>
            {children}
        </div>
    );
}

export default WordCard;


