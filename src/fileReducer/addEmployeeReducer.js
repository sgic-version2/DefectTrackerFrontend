import * as actionType from '../constant/addEmployeeConstant'

const InitialState = {
    employeeDetailsFromState: []
}

export const addEmployeeReducer = (state = InitialState, action) => {
    switch (action.type) {
        case actionType.CREATENEWEMPLOYEE:
            return {
                employeeDetailsFromState: [...state.employeeDetailsFromState, action.payload]
            }
        default:
            return state
    }
}