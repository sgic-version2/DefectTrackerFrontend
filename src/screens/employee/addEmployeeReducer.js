import * as actionType from './addEmployeeConstant'

const InitialState = {
    employeeDetailsFromState:[]
}

export const addEmployeeReducer = (state = InitialState, action) => {
    switch (action.type) {
        case actionType.CREATENEWEMPLOYEE:
            return {
                employeeDetailsFromState:[...state.employeeDetailsFromState,action.payload]
            }
        default:
            return state
    }
}