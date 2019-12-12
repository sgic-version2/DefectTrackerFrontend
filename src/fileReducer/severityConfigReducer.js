import * as actionType from '../constant/severityConfigConstant'

const InitialState = {
    serverityState: [],
    serverityStatus: "",
    errorMessage: ""
  };
  
  // export const priorityConfigReducer = (state = InitialState, action) => {
  //   switch (action.type) {
  //     case actionType.CREATEPRIORITY:
  //       return {
  //         priorityConfigDetailsFromState: [
  //           ...state.priorityConfigDetailsFromState,
  //           action.payload
  //         ]
  //       };
  //     default:
  //       return state;
  //   }
  // };
  export const serverityConfigReducer = (state = InitialState, action) => {
    switch (action.type) {
      case actionType.GETSERVERITY:
        return {
          ...state,
          serverityState: action.payload
        };
      case actionType.ADDSERVERITY:
        return {
          ...state,
          serverityState: state.serverityState.concat(action.payload),
          serverityStatus: state.serverityStatus.concat(action.status)
        };
      case actionType.SHOWERRORMESSAGE:
        return {
          ...state,
          errorMessage: action.payload
        };
      case actionType.EDITSERVERITY:
        return {
          ...state,
          serverityState: state.serverityState.map(data => {
            if (data.serverityId === action.payload.serverityId) {
              return action.payload;
            } else {
              return data;
            }
          }),
          serverityStatus:action.serverityStatus
        };
      case actionType.DELETESERVERITY:
        return {
          ...state,
          serverityState: state.serverityState.filter(
            data => data.serverityId !== action.payload
          )
        };
      default:
        return state;
    }
  };
  