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