import { setEmployeeAction } from '../Utils/employee-reducer';
import { store } from "../Utils/store";


export function setEmployee(employees) {
    store.dispatch(setEmployeeAction(employees))
}