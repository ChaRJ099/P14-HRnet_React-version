import { createStore } from 'redux'
// import { applyMiddleware } from 'redux';
import { initialState, employeeReducer } from './employee-reducer';
import { composeWithDevTools } from '@redux-devtools/extension';

export const store = createStore(
    employeeReducer,
    initialState,
    composeWithDevTools()
);
