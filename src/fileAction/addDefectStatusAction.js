import * as actionTypes from '../constant/AddDefectStatusConstant';
import { defectStatusApi } from '../Api/index'
import axios from 'axios'




export const getDefectStatus = () => dispatch => {
    axios.get(`${defectStatusApi}`).then(res =>
        dispatch({
            type: actionTypes.GETDEFECTSTATUS,
            payload: res.data
        })
    )
}
export const changeDataValuesStatus = (data) => dispatch => {
    axios.post(`${defectStatusApi}`, data).then(res =>
        dispatch({
            type: actionTypes.CREATENEWDEFECTSTATUS,
            payload: data
        })).catch(err =>
            dispatch({
                type: actionTypes.ERRORMESSAGE,
                payload: err
            }))
}
export const getDefectStatusByID = (id) => dispatch => {
    axios.get(`${defectStatusApi}/${id}`).then(res => dispatch({
        type: actionTypes.GETPDEFECTSTATUSBYID,
        payload: res.data
    }))
}
export const upateDefectStatus = data => dispatch => {
    axios
      .put(`${defectStatusApi}/${data.statusId}`, data)
      .then(response =>
        dispatch({
          type: actionTypes.EDITDEFECTSTATUS,
          defectStatusStatus:response,
          payload: data
        })
      )
      .catch(err =>
        dispatch({
          type: actionTypes.ERRORMESSAGE,
          payload: err
        })
      );
  };
  export const deleteDefectStatus = id => dispatch => {
    axios.delete(`${defectStatusApi}/${id}`).then(response =>
      dispatch({
        type: actionTypes.DELETEDEFECTSTATUS,
        payload: id
      })
    );
  };