import * as actionType from '../constant/editEmployeeConstant'

const InitialState = {
    employeeDetailsFromState: []
}

export const editEmployeeReducer = (state = InitialState, action) => {
    switch (action.type) {
        case actionType.EDITNEWEMPLOYEE:
            return {
                employeeDetailsFromState: [...state.employeeDetailsFromState, action.payload]
            }
        default:
            return state
    }
}
