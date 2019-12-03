import * as actionType from '../constant/defectConstant'

const InitialState = {
    defectState: [],
    defectStatus: ''
}

export const defectReducer = (state = InitialState, action) => {
    switch (action.type) {
        case actionType.ADDDEFECT:
            return {
                ...state,
                defectState: state.defectState.concat(action.payload),
                defectStatus: state.defectStatus.concat(action.status)
            }
        default:
            return state
    }
}