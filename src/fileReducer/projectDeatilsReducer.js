import * as actionType from "../constant/projectDetailsConstant";
import axios from "axios";

const InitialState = {
  projectDetailsFromState: [],
  status: ""
};

export const projectDetailsReducer = (state = InitialState, action) => {
  switch (action.type) {
    case actionType.CREATENEWPROJECT:
      axios
        .post("http://localhost:8081/project", action.payload)
        .then(response => {
          console.log(response.status);
          return state.projectDetailsFromState
          if (response.status == 200) {
            return {
              projectDetailsFromState: (state.projectDetailsFromState =
                action.payload),
              status: (state.status = 200)
            };
          }
        })
        .catch(err => {
          state.projectDetailsFromState = err;
        });

    default:
      return state;
  }
};
