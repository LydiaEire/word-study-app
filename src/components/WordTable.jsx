import React, { useState } from 'react';

function WordTable({ words }) {
    const [editIdx, setEditIdx] = useState(null);
    const [editedWord, setEditedWord] = useState({});

    const handleEditClick = (index, word) => {
        setEditIdx(index);
        setEditedWord(word);
    }

    const handleCancelClick = () => {
        setEditIdx(null);
        setEditedWord({});
    }

    const handleSaveClick = () => {
        // Логика сохранения
        setEditIdx(null);
    }

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
                    <td><input type="text" value={editedWord.word || ''} onChange={(e) => setEditedWord({ ...editedWord, word: e.target.value })} /></td>
                    <td><input type="text" value={editedWord.transcription || ''} onChange={(e) => setEditedWord({ ...editedWord, transcription: e.target.value })} /></td>
                    <td><input type="text" value={editedWord.translation || ''} onChange={(e) => setEditedWord({ ...editedWord, translation: e.target.value })} /></td>
                    <td>
                        <button className="save-btn" onClick={handleSaveClick}>Save</button>
                        <button className="cancel-btn" onClick={handleCancelClick}>Cancel</button>
                    </td>
                    </>
                ) : (
                    <>
                    <td>{word.word}</td>
                    <td>{word.transcription}</td>
                    <td>{word.translation}</td>
                    <td>
                        <button className="edit-btn" onClick={() => handleEditClick(index, word)}>Edit</button>
                        <button className="delete-btn">Delete</button>
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
