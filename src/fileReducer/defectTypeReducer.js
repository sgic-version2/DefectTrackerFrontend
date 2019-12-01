import * as actionType from '../constant/defectTypeConstant'

const InitialState = {
    defectTypeDetailsFromState: []
}

export const defectTypeReducer = (state = InitialState, action) => {
    switch (action.type) {
        case actionType.CREATENEWDEFECTTYPE:
            return {
                defectTypeDetailsFromState: [...state.defectTypeDetailsFromState, action.payload]
            }
        default:
            return state
    }
}