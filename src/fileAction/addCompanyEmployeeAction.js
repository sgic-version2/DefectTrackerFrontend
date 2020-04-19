import * as actionTypes from '../constant/addCompanyEmployeeConstant';

export const changeDataValues = data => {
  return {
    type: actionTypes.CREATECOMPANYEMPLOYEE,
    payload: data
  };
};
