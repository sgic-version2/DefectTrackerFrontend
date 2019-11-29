import * as actionTypes from '../constant/severityConfigConstant';

export const changeDataValues = (data) => {
    return {
        type: actionTypes.CREATENEWSEVERITY,
        payload: 
            data
        
    }
}