import * as actionType from '../constant/projectConstant'

const InitialState = {
    roleAllocationData: [],
}
export const projectReducer = (state = InitialState, action) => {
    switch (action.type) {
        case actionType.ROLEALLOCATION:
            return {
                roleAllocationData: [state.roleAllocationData= action.payload]
            }
        case actionType.DEALLOCATION:
            return {
                roleAllocationData: action.payload
            }
        default:
            return state
    }
}