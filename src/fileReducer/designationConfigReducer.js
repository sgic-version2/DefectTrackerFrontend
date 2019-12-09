import * as actionType from '../constant/designationConfigConstant'

const InitialState = {
    designationConfigDetailsFromState: []
}

export const designationConfigReducer = (state = InitialState, action) => {
    switch (action.type) {
        case actionType.CREATEDESIGNATION:
            return {
                designationConfigDetailsFromState: [...state.designationConfigDetailsFromState, action.payload]
            }
        default:
            return state
    }
}