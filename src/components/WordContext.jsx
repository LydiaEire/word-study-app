import React from 'react';
import { Observer } from 'mobx-react';
import wordStore from './WordStore';

const WordContext = React.createContext(wordStore);

export const WordProvider = ({ children }) => (
    <WordContext.Provider value={wordStore}>
        <Observer>{() => children}</Observer>
    </WordContext.Provider>
);

export const useWordStore = () => React.useContext(WordContext);
