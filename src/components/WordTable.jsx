import React, { useState } from 'react';
import { observer } from 'mobx-react';
import { useWordStore } from '../components/WordContext';

const WordTable = observer(() => {
    const wordStore = useWordStore();
    const [editIdx, setEditIdx] = useState(null);
    const [editedWord, setEditedWord] = useState({});
    const [errors, setErrors] = useState({});

    React.useEffect(() => {
        const loadWords = async () => {
            await wordStore.fetchWords();
            console.log(wordStore.words); 
        };
        loadWords();
    }, []);
    

    const validateFields = () => {
        let newErrors = {};
        if (!editedWord.word) {
            newErrors.word = true;
        }
        if (!editedWord.transcription) {
            newErrors.transcription = true;
        }
        if (!editedWord.translation) {
            newErrors.translation = true;
        }
        setErrors(newErrors);
    };

    const handleEditClick = (index, word) => {
        setEditIdx(index);
        setEditedWord(word);
        setErrors({});
    };

    const handleCancelClick = () => {
        setEditIdx(null);
        setEditedWord({});
        setErrors({});
    };

    const handleSaveClick = (index) => {
        validateFields();
        if (Object.keys(errors).length > 0) {
            alert('Произошла ошибка: не все поля заполнены корректно.');
            return;
        }
        wordStore.updateWord(index, editedWord);
        handleCancelClick();
    };

    return (
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Слово</th>
                        <th>Транскрипция</th>
                        <th>Перевод</th>
                        <th>Тема</th>
                        <th>Действия</th>
                    </tr>
                </thead>
                <tbody>
                    {wordStore.words.map((word, index) => (
                        <tr key={word.id}>
                            <td>{index + 1}</td>
                            {editIdx === index ? (
                                <>
                                    <td>
                                        <input
                                            type="text"
                                            value={editedWord.word || ''}
                                            onChange={(e) =>
                                                setEditedWord({ ...editedWord, word: e.target.value })
                                            }
                                            className={errors.word ? 'error' : ''}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            value={editedWord.transcription || ''}
                                            onChange={(e) =>
                                                setEditedWord({
                                                    ...editedWord,
                                                    transcription: e.target.value,
                                                })
                                            }
                                            className={errors.transcription ? 'error' : ''}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            value={editedWord.translation || ''}
                                            onChange={(e) =>
                                                setEditedWord({
                                                    ...editedWord,
                                                    translation: e.target.value,
                                                })
                                            }
                                            className={errors.translation ? 'error' : ''}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            value={editedWord.topic || ''}
                                            onChange={(e) =>
                                                setEditedWord({
                                                    ...editedWord,
                                                    topic: e.target.value,
                                                })
                                            }
                                        />
                                    </td>
                                    <td>
                                        <button onClick={() => handleSaveClick(index)}>Сохранить</button>
                                        <button onClick={handleCancelClick}>Отменить</button>
                                    </td>
                                </>
                            ) : (
                                <>
                                    <td>{word.word}</td>
                                    <td>{word.transcription}</td>
                                    <td>{word.translation}</td>
                                    <td>{word.topic}</td>
                                    <td>
                                        <button onClick={() => handleEditClick(index, word)}>
                                            Редактировать
                                        </button>
                                    </td>
                                </>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
});

export default WordTable;

