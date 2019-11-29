import * as actionType from '../constant/projectDetailsConstant'


const InitialState = {
    projectDetailsFromState: []
}

export const projectDetailsReducer = (state = InitialState, action) => {
    switch (action.type) {
        case actionType.CREATENEWPROJECT:
            return {
                projectDetailsFromState: [...state.projectDetailsFromState, action.payload]
            }
        default:
            return state
    }
}
