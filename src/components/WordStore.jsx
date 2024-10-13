import { makeAutoObservable } from 'mobx';
import { fetchWords, addWord, updateWord, deleteWord } from '../api/WordsApi';

class WordStore {
    words = [];
    loading = false;
    error = null;

    constructor() {
        makeAutoObservable(this);
    }

    fetchWords = async () => {
        this.loading = true;
        try {
            this.words = await fetchWords();
        } catch (error) {
            this.error = 'Ошибка загрузки';
        } finally {
            this.loading = false;
        }
    };

    addWord = async (newWord) => {
        try {
            const addedWord = await addWord(newWord);
            this.words.push(addedWord);
        } catch (error) {
            this.error = 'Ошибка добавления слова';
        }
    };

    updateWord = async (index, updatedWord) => {
        const { id } = this.words[index];
        try {
            const updatedData = await updateWord(id, updatedWord);
            this.words[index] = updatedData;
        } catch (error) {
            this.error = 'Ошибка обновления слова';
        }
    };

    deleteWord = async (wordId) => {
        try {
            await deleteWord(wordId);
            this.words = this.words.filter(word => word.id !== wordId);
        } catch (error) {
            this.error = 'Ошибка удаления слова';
        }
    };
}

const wordStore = new WordStore();
export default wordStore;
