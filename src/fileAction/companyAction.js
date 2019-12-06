import * as actionTypes from '../constant/companyConstant';
import axios from "axios";
import { companyApi } from "../Api/index";
// export const changeDataValues = (data) => {
//     return {
//         type: actionTypes.CREATENEWCOMPANY,
//         payload: data
//     }
// }
export const getCompanyData = () => dispatch => {
    axios.get(`${companyApi}`).then(response =>
      dispatch({
        type: actionTypes.GETCOMPANY,
        payload: response.data
      })
    );
  };
  export const changeDataValues = data => dispatch => {
    axios
      .post(`${companyApi}`, data)
      .then(response =>
        dispatch({
          type: actionTypes.CREATENEWCOMPANY,
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
  export const updateCompany = data => dispatch => {
    axios
      .put(`${companyApi}/${data.companyId}`, data)
      .then(response =>
        dispatch({
          type: actionTypes.EDITCOMPANY,
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
  export const deleteCompany = id => dispatch => {
    axios.delete(`${companyApi}/${id}`).then(response =>
      dispatch({
        type: actionTypes.DELETECOMPANY,
        payload: id
      })
    );
  };
  