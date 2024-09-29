import React, { useContext } from 'react';
import { AppProvider, AppContext } from './context/AppContext';
import WordTable from './components/WordTable';
import WordCard from './components/WordCard';
import ErrorComponent from './components/ErrorComponent';
import LoadingIndicator from './components/LoadingIndicator';

const App = () => {
    const { words, loading, error } = useContext(AppContext);

    return (
        <div>
            <h1>Word Collection</h1>
            {loading && <LoadingIndicator />}
            {error && <ErrorComponent message={error} />}
            {!loading && !error && (
                <>
                    <WordTable />
                    <div className="word-cards">
                        {words.map(word => <WordCard key={word.id} word={word} />)}
                    </div>
                </>
            )}
        </div>
    );
};

const AppWrapper = () => (
    <AppProvider>
        <App />
    </AppProvider>
);

export default AppWrapper;
