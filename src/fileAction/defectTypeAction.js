import * as actionTypes from '../constant/defectTypeConstant';

export const changeDataValues = (data) => {
    return {
        type: actionTypes.CREATENEWDEFECTTYPE,
        payload: 
            data
        
    }
}