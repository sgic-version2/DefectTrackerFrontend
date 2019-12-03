import * as actionType from '../constant/addCompanyEmployeeConstant'

const InitialState = {
    companyemployeeDetailsFromState: []
}

export const addCompanyEmployeeReducer = (state = InitialState, action) => {
    switch (action.type) {
        case actionType.CREATENEWCOMPANYEMPLOYEE:
            return {
                companyemployeeDetailsFromState: [...state.companyemployeeDetailsFromState, action.payload]
            }
        default:
            return state
    }
}