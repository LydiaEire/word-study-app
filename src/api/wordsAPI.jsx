import axios from 'axios';

const API_BASE_URL = 'http://itgirlschool.justmakeit.ru/api/words';

export const fetchWords = async () => {
    const response = await axios.get(API_BASE_URL);
    return response.data;
};

export const addWord = async (wordData) => {
    const response = await axios.post(`${API_BASE_URL}/add`, wordData);
    return response.data;
};

export const updateWord = async (id, wordData) => {
    const response = await axios.post(`${API_BASE_URL}/${id}/update`, wordData);
    return response.data;
};

export const deleteWord = async (id) => {
    const response = await axios.post(`${API_BASE_URL}/${id}/delete`);
    return response.data;
};
