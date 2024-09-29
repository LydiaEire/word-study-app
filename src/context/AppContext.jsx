import React, { createContext, useState, useEffect } from 'react';
import { fetchWords, addWord, updateWord, deleteWord } from '../api/wordsAPI';

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [words, setWords] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadWords = async () => {
            try {
                const data = await fetchWords();
                setWords(data);
            } catch (err) {
                setError('Ошибка загрузки данных');
            } finally {
                setLoading(false);
            }
        };

        loadWords();
    }, []);

    const addWordHandler = async (word) => {
        try {
            const newWord = await addWord(word);
            setWords(prevWords => [...prevWords, newWord]);
        } catch (err) {
            setError('Ошибка добавления слова');
        }
    };

    const updateWordHandler = async (id, updatedWord) => {
        try {
            await updateWord(id, updatedWord);
            setWords(prevWords => prevWords.map(word => (word.id === id ? updatedWord : word)));
        } catch (err) {
            setError('Ошибка обновления слова');
        }
    };

    const deleteWordHandler = async (id) => {
        try {
            await deleteWord(id);
            setWords(prevWords => prevWords.filter(word => word.id !== id));
        } catch (err) {
            setError('Ошибка удаления слова');
        }
    };

    return (
        <AppContext.Provider value={{ words, addWordHandler, updateWordHandler, deleteWordHandler, loading, error }}>
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };
