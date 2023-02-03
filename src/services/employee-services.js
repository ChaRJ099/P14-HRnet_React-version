import { setEmployeeAction } from '../Utils/employee-reducer';
import { store } from "../Utils/store";


export function setEmployee(employees) {
    store.dispatch(setEmployeeAction(employees));
}

// export function getDataFromLocalStorage(employees) {
//     const localObject = JSON.parse(window.localStorage.getItem('persistantState'));
//     // const localStorageEmployee = localObject.employees["id"];

//     if (localObject.employees) {
//         // const localBirthDate = localStorageEmployee.birthdate;
//         // const localStartDate = localStorageEmployee.startdate;
//         // const formatLocalBirthDate = new Date(localBirthDate).toLocaleDateString();
//         // const formatLocalStartDate = new Date(localStartDate).toLocaleDateString();
//         // localStorageEmployee.startdate = formatLocalStartDate;
//         // localStorageEmployee.birthdate = formatLocalBirthDate;
//         // store.dispatch(setDateLocalStorageAction(employees));
//         console.log("1");
//     }
//     else {
//         store.dispatch(setEmployeeAction(employees));

//     }

// }