// store/WordStore.js
import { makeAutoObservable } from 'mobx';

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
            const response = await fetch('/api/words');  
            this.words = await response.json();
        } catch (error) {
            this.error = 'Ошибка загрузки';
        } finally {
            this.loading = false;
        }
    };

    addWord = async (newWord) => {
        try {
            const response = await fetch('/api/words', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newWord),
            });

            if (response.ok) {
                const addedWord = await response.json();
                this.words.push(addedWord);
            }
        } catch (error) {
            this.error = 'Ошибка добавления слова';
        }
    };

    updateWord = async (index, updatedWord) => {
        const { word, id } = this.words[index]; 

        try {
            const response = await fetch(`/api/words/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedWord),
            });

            if (response.ok) {
                this.words[index] = updatedWord;
            }

        } catch (error) {
            this.error = 'Ошибка обновления слова';
        }
    };

    deleteWord = async (wordId) => {
        try {
            const response = await fetch(`/api/words/${wordId}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                this.words = this.words.filter(word => word.id !== wordId);
            }

        } catch (error) {
            this.error = 'Ошибка удаления слова';
        }
    };
}

const wordStore = new WordStore();
export default wordStore;
