import * as actionTypes from '../constant/defectConstant';
import axios from 'axios'

export const changeDataValues = (data) => dispatch => {
    axios.post('http://127.0.0.1:8081/api/v1/defect', data).then(response => {
        dispatch({
            type: actionTypes.ADDDEFECT,
            status: response.status,
            payload: data

        })
    })
}