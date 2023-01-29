import employeesList from "../Data/employees";
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { set } from './employee-reducer';
import store from "../../store";


// console.log(jsonFile);

export function setEmployee(employee) {

    const dispatch = useDispatch();
    dispatch(set(employee))

    store.dispatch({ type: 'set', action: employee })

}

export function getEmployee() {
    const employees = useSelector((state) => state.employees)
    if (employees.length >= 1) {
        return employees;
    }
    return "erreur : pas d'employés";
}