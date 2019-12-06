import * as actionType from "../constant/defectConstant";

const InitialState = {
  defectState: [],
  defectStatus: "",
  errorMessage: ""
};

export const defectReducer = (state = InitialState, action) => {
  switch (action.type) {
    case actionType.GETDEFECT:
      return {
        ...state,
        defectState: action.payload
      };
    case actionType.ADDDEFECT:
      return {
        ...state,
        defectState: state.defectState.concat(action.payload),
        defectStatus: state.defectStatus.concat(action.status)
      };
    case actionType.SHOWERRORMESSAGE:
      return {
        ...state,
        errorMessage: action.payload
      };
    case actionType.EDITDEFECT:
      return {
        ...state,
        defectState: state.defectState.map(data => {
          if (data.defectId == action.payload.defectId) {
            return action.payload;
          } else {
            return data;
          }
        })
      };
    case actionType.DELETEDEFECT:
      return {
        ...state,
        defectState: state.defectState.filter(
          data => data.defectId !== action.payload
        )
      };
    default:
      return state;
  }
};
