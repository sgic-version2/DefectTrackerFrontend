import * as actionTypes from '../constant/editEmployeeConstant';

export const changeDataValues = (data) => {
    return {
        type: actionTypes.EDITNEWEMPLOYEE,
        payload: {
            data
        }
    }
}