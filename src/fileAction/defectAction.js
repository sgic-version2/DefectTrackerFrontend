import * as actionTypes from '../constant/defectConstant';

export const changeDataValues = (data) => {
    return {
        type: actionTypes.ADDDEFECT,
        payload: data
    }
}