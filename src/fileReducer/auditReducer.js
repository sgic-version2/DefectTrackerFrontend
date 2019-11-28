import * as actionType from '../constant/auditConstant'

const InitialState = {
    open: false
}

export const auditReducer = (state = InitialState, action) => {
    switch (action.type) {
        case actionType.EXPORTAUDIT:
            return {
                open: true
            }

        default:
            return state
    }
}