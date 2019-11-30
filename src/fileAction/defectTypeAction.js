import * as actionTypes from "../constant/defectTypeConstant";

export const changeDataValues = data => {
  return {
    type: actionTypes.CREATENEWDEFECTTYPE,
    payload: data
  };
};

export const upadateDefectType = data => {
  return {
    type: actionTypes.UPDATE_DEFECT_TYPE,
    payload: data
  };
};
