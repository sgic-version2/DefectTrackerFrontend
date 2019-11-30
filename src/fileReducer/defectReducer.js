import * as actionType from '../constant/defectConstant'

const InitialState = {
    defectState: [
    {
        key: '1',
        Project: 'D001',
        Module: 'Login',
        Severity: 'Low',
        Priority: 'Heigh',
        DefectType: 'UI',
        defectSta: 'reOpen',
    },
    {
        key: '2',
        Project: 'D002',
        Module: 'Login',
        Severity: 'Low',
        Priority: 'Heigh',
        DefectType: 'UI',
        defectSta: 'reOpen',
    }     
    ]
}

export const defectReducer = (state = InitialState, action) => {
    switch (action.type) {
        case actionType.ADDDEFECT:
            return {
                defectState: [...state.defectState, action.payload]
            }
        default:
            return state
    }
}