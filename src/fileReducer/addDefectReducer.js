import * as actionType from '../constant/addDefectConstant'

const InitialState = {
    defectDetailsFromState: []
}

export const addDefectReducer = (state = InitialState, action) => {
    switch (action.type) {
        case actionType.CREATEDEFECT:
            return {
                defectDetailsFromState: [...state.defectDetailsFromState, action.payload]
            }
        default:
            return state
    }
}