import { createStore } from 'redux';
import { employeeReducer } from './employee-reducer';
import { composeWithDevTools } from '@redux-devtools/extension';

function saveToLocalStorage(state) {
    try {
        const serialisedState = JSON.stringify(state);
        localStorage.setItem("persistantState", serialisedState);
    } catch (e) {
        console.warn(e);
    }
}

function loadFromLocalStorage() {
    try {
        const serialisedState = localStorage.getItem("persistantState");
        if (serialisedState === null) return undefined;
        return JSON.parse(serialisedState);
    } catch (e) {
        console.warn(e);
        return undefined;
    }
}

export let store = createStore(
    employeeReducer,
    loadFromLocalStorage(),
    composeWithDevTools()
);

store.subscribe(() => saveToLocalStorage(store.getState()));


