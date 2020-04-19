import * as actionType from "../constant/priorityConfigConstant";

const InitialState = {
  priorityState: [],
  priorityStatus: "",
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
export const priorityConfigReducer = (state = InitialState, action) => {
  switch (action.type) {
    case actionType.GETPRIORITY:
      return {
        ...state,
        priorityState: action.payload
      };
    case actionType.ADDPRIORITY:
      return {
        ...state,
        priorityState: state.priorityState.concat(action.payload),
        priorityStatus: state.priorityStatus.concat(action.status)
      };
    case actionType.SHOWERRORMESSAGE:
      return {
        ...state,
        errorMessage: action.payload
      };
    case actionType.EDITPRIORITY:
      return {
        ...state,
        priorityState: state.priorityState.map(data => {
          if (data.priorityId === action.payload.priorityId) {
            return action.payload;
          } else {
            return data;
          }
        }),
        priorityStatus:action.priorityStatus
      };
    case actionType.DELETEPRIORITY:
      return {
        ...state,
        priorityState: state.priorityState.filter(
          data => data.priorityId !== action.payload
        )
      };
    default:
      return state;
  }
};
