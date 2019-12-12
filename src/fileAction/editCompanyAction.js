
import * as actionTypes from '../constant/companyConstant';
export const changeEditDataValues = (data) => {

    return {
        type: actionTypes.PUTEDITCOMPANY,
        payload: data
    }
  }