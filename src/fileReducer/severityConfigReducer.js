import * as actionType from '../constant/severityConfigConstant'

const InitialState = {
    severityDetailsFromState: []
}

export const severityConfigReducer = (state = InitialState, action) => {
    switch (action.type) {
        case actionType.CREATENEWSEVERITY:
            return {
                severityDetailsFromState: [...state.severityDetailsFromState, action.payload]
              
            }
        default:
            return state
    }
}