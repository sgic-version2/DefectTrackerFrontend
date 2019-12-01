import * as actionType from '../constant/companyConstant'

const InitialState = {
    companyDetailsFromState: [
        {
            reg_no: 'SGIC-001',
            companyName: 'John Keels',
            abbreviation: 'JK',
            license_period: '6Yrs',
            admin_name: 'John '
         },
    ]
}

export const companyReducer = (state = InitialState, action) => {
    switch (action.type) {
        case actionType.CREATENEWCOMPANY:
            return {
                companyDetailsFromState: [...state.companyDetailsFromState, action.payload]
            }
        default:
            return state
    }
}