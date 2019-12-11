import * as actionTypes from '../constant/severityConfigConstant';
import { serverityApi } from "../Api/index";
import axios from "axios";

export const getprioityData = () => dispatch => {
    axios.get(`${serverityApi}`).then(response =>
      dispatch({
        type: actionTypes.GETSERVERITY,
        payload: response.data
      })
    );
  };
  
  export const changeDataValues = data => dispatch => {
    axios
      .post(`${serverityApi}`, data)
      .then(response =>
        dispatch({
          type: actionTypes.ADDSERVERITY,
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
  
  export const updateServerity  = data => dispatch => {
    axios
      .put(`${serverityApi}/${data.serverityApi}`, data)
      .then(response =>
        dispatch({
          type: actionTypes.EDITSERVERITY,
          serverityStatus: response,
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
  export const deleteServerity = id => dispatch => {
    axios.delete(`${serverityApi}/${id}`).then(response =>
      dispatch({
        type: actionTypes.DELETESERVERITY,
        payload: id
      })
    );
  };