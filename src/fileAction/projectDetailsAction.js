import * as actionTypes from '../constant/projectDetailsConstant';
import { projectApi } from '../Api/index'
import axios from 'axios'

export const getProjectDetails = () => dispatch => {
    axios.get(`${projectApi}`).then(res =>
        dispatch({
            type: actionTypes.GETPROJECT,
            payload: res.data
        })
    )
}
export const changeDataValues = (data) => dispatch => {
    axios.post(`${projectApi}`, data).then(res =>
        dispatch({
            type: actionTypes.CREATENEWPROJECT,
            payload: data
        })).catch(err =>
            dispatch({
                type: actionTypes.ERRORMESSAGE,
                payload: err
            }))
}
export const getProjectDetailsByID = (id) => dispatch => {
    axios.get(`${projectApi}/${id}`).then(res => dispatch({
        type: actionTypes.GETPROJECTBYID,
        payload: res.data
    }))
}
export const upateProject = data => dispatch => {
    axios
      .put(`${projectApi}/${data.project_id}`, data)
      .then(response =>
        dispatch({
          type: actionTypes.UPDATEPROJECT,
          projectStatus:response,
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
  export const deleteProject = id => dispatch => {
    axios.delete(`${projectApi}/${id}`).then(response =>
      dispatch({
        type: actionTypes.DELETEPROJECT,
        payload: id
      })
    );
  };