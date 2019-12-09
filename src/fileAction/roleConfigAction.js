import * as actionTypes from '../constant/roleConfigConstant';
import axios from 'axios';
import { roleApi } from '../Api';

export const changeDataValues = (data) => dispatch => {
    axios.post(`${roleApi}`,data).then(res =>
        dispatch({
        type: actionTypes.CREATEROLE,
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
    export const updateRole = (data) => dispatch => {
        axios.put(`${roleApi}/${data.rid}`,data).then(res =>
            dispatch({
            type: actionTypes.UPDATEROLE,
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
    export const deleteRole = (id) => dispatch => {
        axios.delete(`${roleApi}/${id}`).then(res =>
            dispatch({
            type: actionTypes.DELETEROLE,
            payload: id   
            })
            )
        }
    export const getRole = () => dispatch => {
        axios.get(`${roleApi}`).then(res =>
            dispatch({
            type: actionTypes.GETROLE,
            payload: res.data   
            })
            )
        }