import React, { useState } from 'react';
import PropTypes from 'prop-types';
import WordCard from './WordCard';

function WordCarousel({ words, initialIndex, onTranslationViewed }) {
    const [currentIndex, setCurrentIndex] = useState(initialIndex || 0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + 1 < words.length ? prevIndex + 1 : 0
        );
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex - 1 >= 0 ? prevIndex - 1 : words.length - 1
        );
    };

    if (!words || words.length === 0) {
        return <div>Нет доступных карточек для отображения</div>;
    }

    return (
        <div className="word-carousel">
            <button onClick={handlePrevious} className="carousel-control">
                &lt;
            </button>
            <WordCard {...words[currentIndex]} onTranslationViewed={onTranslationViewed} />
            <button onClick={handleNext} className="carousel-control">
                &gt;
            </button>
        </div>
    );
}

WordCarousel.propTypes = {
    words: PropTypes.arrayOf(
        PropTypes.shape({
            word: PropTypes.string.isRequired,
            transcription: PropTypes.string.isRequired,
            translation: PropTypes.string.isRequired,
            topic: PropTypes.string.isRequired,
        })
    ),
    initialIndex: PropTypes.number,
    onTranslationViewed: PropTypes.func, 
};

WordCarousel.defaultProps = {
    words: [],
    initialIndex: 0,
    onTranslationViewed: () => {}, 
};

export default WordCarousel;
