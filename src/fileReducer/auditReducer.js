import * as actionType from '../constant/auditConstant'

const InitialState = {
    auditexportState: false
}

export const auditReducer = (state = InitialState, action) => {
    switch (action.type) {
        case actionType.EXPORTAUDIT:
            return {
                auditexportState: [...state.auditexportState, action.payload]
            }

        default:
            return state
    }
}