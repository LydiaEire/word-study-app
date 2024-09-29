import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const WordTable = () => {
    const { words, updateWordHandler, deleteWordHandler } = useContext(AppContext);
    const [editingWord, setEditingWord] = useState(null);
    const [formData, setFormData] = useState({ english: '', russian: '', transcription: '' });

    const startEditing = (word) => {
        setEditingWord(word.id);
        setFormData({ english: word.english, russian: word.russian, transcription: word.transcription });
    };

    const saveChanges = async (id) => {
        await updateWordHandler(id, { ...formData, id, tags: '', tags_json: '' });
        setEditingWord(null);
    };

    return (
        <table>
            <thead>
                <tr>
                    <th>English</th>
                    <th>Transcription</th>
                    <th>Russian</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {words.map(word => (
                    <tr key={word.id}>
                        <td>
                            {editingWord === word.id ? 
                                <input type="text" value={formData.english} onChange={(e) => setFormData({ ...formData, english: e.target.value })} />
                                : word.english
                            }
                        </td>
                        <td>
                            {editingWord === word.id ? 
                                <input type="text" value={formData.transcription} onChange={(e) => setFormData({ ...formData, transcription: e.target.value })} />
                                : word.transcription
                            }
                        </td>
                        <td>
                            {editingWord === word.id ? 
                                <input type="text" value={formData.russian} onChange={(e) => setFormData({ ...formData, russian: e.target.value })} />
                                : word.russian
                            }
                        </td>
                        <td>
                            {editingWord === word.id ? 
                                <button onClick={() => saveChanges(word.id)}>Save</button>
                                : <button onClick={() => startEditing(word)}>Edit</button>
                            }
                            <button onClick={() => deleteWordHandler(word.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default WordTable;

