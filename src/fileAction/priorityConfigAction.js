import * as actionTypes from "../constant/priorityConfigConstant";
import { priorityApi } from "../Api/index";
import axios from "axios";

export const getprioityData = () => dispatch => {
  axios.get(`${priorityApi}`).then(response =>
    dispatch({
      type: actionTypes.GETPRIORITY,
      payload: response.data
    })
  );
};

export const changeDataValues = data => dispatch => {
  axios
    .post(`${priorityApi}`, data)
    .then(response =>
      dispatch({
        type: actionTypes.ADDPRIORITY,
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

export const updatePriority = data => dispatch => {
  axios
    .put(`${priorityApi}/${data.priorityId}`, data)
    .then(response =>
      dispatch({
        type: actionTypes.EDITPRIORITY,
        priorityStatus: response,
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
export const deletePriority = id => dispatch => {
  axios.delete(`${priorityApi}/${id}`).then(response =>
    dispatch({
      type: actionTypes.DELETEPRIORITY,
      payload: id
    })
  );
};

// export const changeDataValues = (data) => {
//     return {
//         type: actionTypes.CREATEPRIORITY,
//         payload:
//             data

//     }
// }
