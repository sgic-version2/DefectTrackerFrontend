import * as actionType from '../constant/emplyeeConstant';

const InitialState = {
  employeeState: [],
  employeeStatus: '',
  errorMessage: ''
};

export const employeeReducer = (state = InitialState, action) => {
  switch (action.type) {
    case actionType.GETEMPLOYEE:
      return {
        ...state,
        employeeState: action.payload
      };

    case actionType.ADDEMPLOYEE:
      return {
        ...state,
        employeeState: state.employeeState.concat(action.payload),
        employeeStatus: state.employeeStatus.concat(action.status)
      };
    case actionType.SHOWERROEMESSAGE:
      return {
        ...state,
        errorMessage: action.payload
      };
    case actionType.EDITEMPLOYEE:
      return {
        ...state,
        employeeState: state.employeeState.map(data => {
          if (data.employeeId == action.payload.employeeId) {
            return action.payload;
          } else {
            return data;
          }
        })
      };
    case actionType.DELETEEMPLOYEE:
      return {
        ...state,
        employeeState: state.employeeState.filter(
          data => data.employeeId !== action.payload
        )
      };
    default:
      return state;
  }
};
