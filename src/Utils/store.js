import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { initialState, employeeReducer } from './employee-reducer';
import { composeWithDevTools } from '@redux-devtools/extension';

let persistConfig = {
    key: 'employees',
    storage,
}

let persistedReducer = persistReducer(persistConfig, employeeReducer);

export let store = createStore(
    persistedReducer,
    initialState,
    composeWithDevTools()
);

export let persistor = persistStore(store);

