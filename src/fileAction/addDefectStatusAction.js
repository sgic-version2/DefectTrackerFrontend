import * as actionTypesDefect from '../constant/AddDefectStatusConstant';

export const changeDataValuesStatus = (data) => {
    return {
        type: actionTypesDefect.CREATENEWDEFECTSTATUS,
        payload: {
            data
        }
    }
}