import * as actionTypes from '../constant/defectTypeConstant';
import {defectTypeApi} from '../Api/index'
import axios from 'axios'



export const getDefectType = () => dispatch => {
  axios.get(`${defectTypeApi}`).then(res =>
      dispatch({
          type: actionTypes.GETDEFECTTYPE,
          payload: res.data
      })
  )
}

export const changeDataValuesType = (data) => dispatch => {
    axios.post(`${defectTypeApi}`, data).then(res =>
        dispatch({
            type: actionTypes.CREATENEWDEFECTTYPE,
            payload: data
        })).catch(err =>
            dispatch({
                type: actionTypes.ERRORMESSAGE,
                payload: err
            }))
}
export const getDefectTypeByID = (id) => dispatch => {
    axios.get(`${defectTypeApi}/${id}`).then(res => dispatch({
        type: actionTypes.GETPDEFECTTYPEBYID,
        payload: res.data
    }))
}
export const upateDefectType = data => dispatch => {
    axios
      .put(`${defectTypeApi}/${data.TypeId}`, data)
      .then(response =>
        dispatch({
          type: actionTypes.EDITDEFECTTYPE,
          defectTypeStatus:response,
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
  export const deleteDefectType = id => dispatch => {
    axios.delete(`${defectTypeApi}/${id}`).then(response =>
      dispatch({
        type: actionTypes.DELETEDEFECTTYPE,
        payload: id
      })
    );
  };