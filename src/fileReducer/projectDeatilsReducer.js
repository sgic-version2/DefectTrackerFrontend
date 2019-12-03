import * as actionType from "../constant/projectDetailsConstant";
import axios from "axios";

const InitialState = {
  projectDetailsFromState: [],
  status: ""
};

export const projectDetailsReducer = (state = InitialState, action) => {
  switch (action.type) {
    case actionType.CREATENEWPROJECT:
      console.log('dfhgygy')
    default:
      return state;
  }
};
