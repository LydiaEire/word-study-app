import React, { useState } from 'react';
import { useWordStore } from '../components/WordContext';

const AddWordForm = () => {
    const [word, setWord] = useState('');
    const [transcription, setTranscription] = useState('');
    const [translation, setTranslation] = useState('');
    const [topic, setTopic] = useState('');
    const wordStore = useWordStore();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (word && transcription && translation && topic) {
            await wordStore.addWord({ word, transcription, translation, topic });
            setWord('');
            setTranscription('');
            setTranslation('');
            setTopic('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="add-word-form">
            <input value={word} onChange={(e) => setWord(e.target.value)} placeholder="Слово" required />
            <input value={transcription} onChange={(e) => setTranscription(e.target.value)} placeholder="Транскрипция" required />
            <input value={translation} onChange={(e) => setTranslation(e.target.value)} placeholder="Перевод" required />
            <input value={topic} onChange={(e) => setTopic(e.target.value)} placeholder="Тема" required />
            <button type="submit">Сохранить</button>
        </form>
    );
};

export default AddWordForm;
