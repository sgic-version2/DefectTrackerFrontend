import * as actionType from '../constant/hrAllocationConstant'

const InitialState = {
    hrAllocationData: [],
}
export const hrAllocationReducer = (state = InitialState, action) => {
    switch (action.type) {
        case actionType.HRALLOCATION:
            return {
                hrAllocationData: [state.hrAllocationData= action.payload]
            }
       
        default:
            return state
    }
}