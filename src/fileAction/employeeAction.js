import * as actionTypes from '../constant/emplyeeConstant';
import axios from 'axios';
import { employeeApi } from '../Api/index';

export const getEmployeeData = () => dispatch => {
  axios.get(`${employeeApi}`).then(response =>
    dispatch({
      type: actionTypes.GETEMPLOYEE,
      payload: response.data
    })
  );
};

export const changeDataValues = data => dispatch => {
  axios
    .post(`${employeeApi}`, data)
    .then(response =>
      dispatch({
        type: actionTypes.ADDEMPLOYEE,
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

export const upateEmployee = data => dispatch => {
  axios
    .put(`${employeeApi}/${data.employeeId}`, data)
    .then(response =>
      dispatch({
        type: actionTypes.EDITEMPLOYEE,
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

export const deleteEmployee = id => dispatch => {
  axios.delete(`${employeeApi}/${id}`).then(response =>
    dispatch({
      type: actionTypes.DELETEEMPLOYEE,
      payload: id
    })
  );
};
