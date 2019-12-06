import * as actionType from '../constant/modelConstant'

const InitialState = {
    open: false
}

export const modelReducer = (state = InitialState, action) => {
    switch (action.type) {
        case actionType.MODELOPEN:
            return {
                open: true
            }
        case actionType.MODELCLOSE:
            return {
                open: false
            }
        default:
            return state
    }
}