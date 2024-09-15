import React from 'react';
import WordCarousel from '../components/WordCarousel';

function GamePage({ words, updateWord, onTranslationViewed, learnedCount }) {
    return (
        <main className="main-content">
            <div className="learned-counter-container">
                <h3>Изученные слова: {learnedCount}</h3>
            </div>
            <div className="card-container">
                <WordCarousel
                    words={words}
                    initialIndex={0}
                    onTranslationViewed={onTranslationViewed}
                    updateWord={updateWord}
                />
            </div>
        </main>
    );
}

export default GamePage;

