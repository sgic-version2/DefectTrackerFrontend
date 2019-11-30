import * as actionType from '../constant/addEmployeeConstant'

const InitialState = {
    employeeDetailsFromState: [
        {
            key: '1',
            employeeID: '001',
            employeeName: 'sasee',
            employeeDesignation: 'SE',
            employeeEmail: 'sasee9488@gmail.com',
            availability: '90',
            role: ''
        },
        {
            key: '2',
            employeeID: '002',
            employeeName: 'kumar',
            employeeDesignation: 'ASE',
            employeeEmail: 'sasee9488@gmail.com',
            availability: '30',
            role: 'ASE'
        }
    ]
}

export const addEmployeeReducer = (state = InitialState, action) => {
    switch (action.type) {
        case actionType.CREATENEWEMPLOYEE:
            return {
                employeeDetailsFromState: [...state.employeeDetailsFromState, action.payload]
            }
        default:
            return state
    }
}