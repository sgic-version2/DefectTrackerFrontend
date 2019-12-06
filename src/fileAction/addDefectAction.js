import * as actionTypes from '../constant/addDefectConstant';

export const changeDataValues = (data) => {
    return {
        type: actionTypes.CREATEDEFECT,
        payload: {
            data
        }
    }
}