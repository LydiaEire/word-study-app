import React, { useState, useEffect } from 'react';

function WordTable({ words, onWordChange }) {
    const [editIdx, setEditIdx] = useState(null);
    const [editedWord, setEditedWord] = useState({});
    const [errors, setErrors] = useState({});

    useEffect(() => {
        validateFields();
    }, [editedWord]);

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

    const handleSaveClick = () => {
        validateFields();
        if (Object.keys(errors).length > 0) {
            alert('Произошла ошибка: не все поля заполнены корректно.');
            return;
        }
        console.log('Сохраненные данные:', editedWord);
        onWordChange(editIdx, editedWord);
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
                        <th>Действия</th>
                    </tr>
                </thead>
                <tbody>
                    {words.map((word, index) => (
                        <tr key={index}>
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
                                                setEditedWord({ ...editedWord, transcription: e.target.value })
                                            }
                                            className={errors.transcription ? 'error' : ''}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            value={editedWord.translation || ''}
                                            onChange={(e) =>
                                                setEditedWord({ ...editedWord, translation: e.target.value })
                                            }
                                            className={errors.translation ? 'error' : ''}
                                        />
                                    </td>
                                    <td>
                                        <button onClick={handleSaveClick}>Сохранить</button>
                                        <button onClick={handleCancelClick}>Отменить</button>
                                    </td>
                                </>
                            ) : (
                                <>
                                    <td>{word.word}</td>
                                    <td>{word.transcription}</td>
                                    <td>{word.translation}</td>
                                    <td>
                                        <button onClick={() => handleEditClick(index, word)}>Редактировать</button>
                                    </td>
                                </>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default WordTable;
