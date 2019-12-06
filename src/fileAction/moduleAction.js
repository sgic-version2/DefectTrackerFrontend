import * as actionTypes from "../constant/muduleAllocation";
// import * as actionType from "../constant/moduleConstant";

import { moduleApi } from "../Api/index";
import axios  from 'axios';

export const moduleAllocation = data => {
  return {
    type: actionTypes.MODULEALLOCATION,
    payload: {
      data
    }
  };
};

export const getModuleData = () => dispatch => {
  axios.get(`${moduleApi}`).then(response =>
    dispatch({
      type: actionTypes.GET_MODULE,
      payload: response.data
    })
  );
};
export const changeDataValues = data => dispatch => {
  axios
    .post(`${moduleApi}`, data)
    .then(response =>
      dispatch({
        type: actionTypes.ADD_MODULE,
        status: response.status,
        payload: data
      })
    )
    .catch(err =>
      dispatch({
        type: actionTypes.SHOWERRORMESSAGE,
        payload: err
      })
    );
};
export const upateModule = data => dispatch => {
  axios
    .put(`${moduleApi}/${data.moduleId}`, data)
    .then(response =>
      dispatch({
        type: actionTypes.EDIT_MODULE,
        payload: response.data
      })
    )
    .catch(err =>
      dispatch({
        type: actionTypes.SHOWERRORMESSAGE,
        payload: err
      })
    );
};
export const deleteModule = id => dispatch => {
  axios.delete(`${moduleApi}/${id}`).then(response =>
    dispatch({
      type: actionTypes.DELETE_MODULE,
      payload: id
    })
  );
};
