import * as actionTypes from "../constant/defectConstant";
import axios from "axios";
import { defectApi } from "../Api/index";

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
        .put(`${defectApi}/${data.id}`, data)
        .then(response =>
            dispatch({
                type: actionTypes.EDITDEFECT,
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
export const deleteDefect = id => dispatch => {
    axios.delete(`${defectApi}/${id}`).then(response =>
        dispatch({
            type: actionTypes.DELETEDEFECT,
            payload: id
        })
    );
};

export const getDefectById = (id) => dispatch => {
    axios.get(`${defectApi}/${id}`).then(response =>
        dispatch({
            type: actionTypes.GETDEFECTBYID,
            payload: response.data
        }))
}
