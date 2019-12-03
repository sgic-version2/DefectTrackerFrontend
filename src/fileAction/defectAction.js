import * as actionTypes from '../constant/defectConstant';
import axios from 'axios'
import { defectApi } from '../Api/index'

export const changeDataValues = (data) => dispatch => {
    axios.post(`${defectApi}`, data).then(response => {
        dispatch({
            type: actionTypes.ADDDEFECT,
            status: response.status,
            payload: data

        })
    })
}