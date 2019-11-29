import * as actionTypes from './addEmployeeConstant';

export const changeDataValues = (data) => {
    return {
        type: actionTypes.CREATENEWEMPLOYEE,
        payload: {
            data
        }
    }
}