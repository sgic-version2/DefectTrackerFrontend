import * as actionTypes from '../constant/addEmployeeConstant';

export const changeDataValues = (data) => {
    return {
        type: actionTypes.CREATENEWEMPLOYEE,
        payload: {
            data
        }
    }
}