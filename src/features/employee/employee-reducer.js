

const initialState = {
    employees: []
  };

function employeeReducer(state, action) {
    switch (action.type) {
      case 'set':
        return { 
            ...state,
            employees: action.payload.employees
         }
      default:
        return state
    }
  }


export default employeeReducer