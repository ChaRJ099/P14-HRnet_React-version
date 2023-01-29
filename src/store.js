import { createStore } from 'redux'
import { applyMiddleware } from 'redux';
import employeeReducer from './features/employee/employee-reducer'
// import { composeWithDevTools } from '@redux-devtools/extension';

export let store  = createStore(employeeReducer);
