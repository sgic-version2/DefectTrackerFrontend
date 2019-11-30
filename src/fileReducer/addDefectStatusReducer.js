import * as actionType from '../constant/AddDefectStatusConstant'
//import { CREATENEWDEFECTSTATUS } from './../constant/AddDefectStatusConstant';

const InitialState = {
    defectStatusDetailsFromState: []
}

export const addEmployeeReducer = (state = InitialState, action) => {
    switch (action.type) {
        case actionType.CREATENEWDEFECTSTATUS:
            return {
                defectStatusDetailsFromState: [...state.defectStatusDetailsFromState, action.payload]
            }
        default:
            return state
    }
}