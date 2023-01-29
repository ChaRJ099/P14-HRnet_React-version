export const initialState = {
  employees: []
};

// actions
export const setEmployeeAction = (employees) => ({
  type: "employee/set",
  payload: employees,
});


export const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'employee/set':
      return {
        ...state,
        employees: action.payload
      }
    default:
      return state
  }
}

