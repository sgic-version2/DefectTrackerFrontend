import * as actionTypes from '../constant/designationConfigConstant';
import axios from 'axios';
import { designationApi } from '../Api';

export const changeDataValues = (data) => dispatch => {
    axios.post(`${designationApi}`,data).then(res =>
        dispatch({
        type: actionTypes.CREATEDESIGNATION,
        payload: data   
        })
        )
        .catch(err=>
            dispatch({
                type:actionTypes.ERRORMESSAGE,
                payload:err
            })
            );
    }
export const updateDesignation = (data) => dispatch => {
    axios.put(`${designationApi}/${data.designationId}`,data).then(res =>
        dispatch({
        type: actionTypes.UPDATEDESIGNATION,
        roleStatus:res,
        payload: data   
        })
        )
        .catch(err=>
            dispatch({
                type:actionTypes.ERRORMESSAGE,
                payload:err
            })
            );
    };
export const deleteDesignation = (id) => dispatch => {
    axios.delete(`${designationApi}/${id}`).then(res =>
        dispatch({
        type: actionTypes.DELETEDESIGNATION,
        payload: id   
        })
        )
    }
export const getDesignation = () => dispatch => {
    axios.get(`${designationApi}`).then(res =>
        dispatch({
        type: actionTypes.GETDESIGNATION,
        payload: res.data   
        })
        )
    }