import * as actionTypes from '../constant/defectConstant';
import axios from 'axios';
import { defectApi } from '../Api/index';
// import api from '../config/axiosConfig';
export const getDefectData = () => dispatch => {
  axios.get(`${defectApi}`).then(response =>
    dispatch({
      type: actionTypes.GETDEFECT,
      payload: response.data
    })
  );
};
export const changeDataValues = data => dispatch => {
  axios
    .post(`${defectApi}`, data)
    .then(response =>
      dispatch({
        type: actionTypes.ADDDEFECT,
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
export const upateDefect = data => dispatch => {
  axios
    .put(`${defectApi}/${data.defectId}`, data)
    .then(response =>
      dispatch({
        type: actionTypes.EDITDEFECT,
        payload: data
      })
    )
    .catch(err =>
      dispatch({
        type: actionTypes.SHOWERRORMESSAGE,
        payload: err
      })
    );


    // api(method, service, endpoint, token, body, params)
    // .then(response => {

    // }).catch(err => {

    // })
};
export const deleteDefect = id => dispatch => {
  axios.delete(`${defectApi}/${id}`).then(response =>
    dispatch({
      type: actionTypes.DELETEDEFECT,
      payload: id
    })
  );
};
