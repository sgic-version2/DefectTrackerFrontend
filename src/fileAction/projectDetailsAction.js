import * as actionTypes from '../constant/projectDetailsConstant';

export const changeDataValues = (data) => {
    return {
        type: actionTypes.CREATENEWPROJECT,
        payload: 
            data
        
    }
}