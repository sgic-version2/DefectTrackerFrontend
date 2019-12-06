import * as actionTypes from '../constant/companyConstant';

export const changeDataValues = (data) => {
    return {
        type: actionTypes.CREATENEWCOMPANY,
        payload: data
    }
}

export const companyDetailsChangeControl = data => {
    return {
      type:actionTypes.COMPANYDETAILSUPDATE,
      payload: data
    };
  };