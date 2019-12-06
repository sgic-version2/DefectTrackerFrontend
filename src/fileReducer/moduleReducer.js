import * as actionType from "../constant/moduleConstant";

const InitialState = {
  moduleState: [],
  moduleStatus: "",
  errorMessage: ""
};

export const moduleReducer = (state = InitialState, action) => {
  switch (action.type) {
    case actionType.GET_MODULE:
      return {
        ...state,
        moduleState: action.payload
      };
    case actionType.ADD_MODULE:
      return {
        ...state,
        moduleState: state.moduleState.concat(action.payload),
        moduleState: state.moduleStatus.concat(action.status)
      };
    case actionType.SHOWERRORMESSAGE:
      return {
        ...state,
        errorMessage: action.payload
      };
    case actionType.EDIT_MODULE:
      return {
        ...state,
        moduleState: state.moduleState.map(data => {
          if (data.moduleId == action.payload.moduleId) {
            return action.payload;
          } else {
            return data;
          }
        })
      };
    case actionType.DELETE_MODULE:
      return {
        ...state,
        moduleState: state.moduleState.filter(
          data => data.moduleId !== action.payload
        )
      };
    default:
      return state;
  }
};
