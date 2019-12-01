import * as actionType from '../constant/priorityConfigConstant'

const InitialState = {
    priorityConfigDetailsFromState: []
}

export const priorityConfigReducer = (state = InitialState, action) => {
    switch (action.type) {
        case actionType.CREATEPRIORITY:
            return {
                priorityConfigDetailsFromState: [...state.priorityConfigDetailsFromState, action.payload]
            }
        default:
            return state
    }
}