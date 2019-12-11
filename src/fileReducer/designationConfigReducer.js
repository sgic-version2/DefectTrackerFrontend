import * as actionType from '../constant/designationConfigConstant'

const InitialState = {
    designationConfigDetailsFromState: [],
    errorMessage: '',
    designationDetailsByID: [],
    designationStatus: ''
}

export const designationConfigReducer = (state = InitialState, action) => {
    switch (action.type) {
        case actionType.CREATEDESIGNATION:
            return {
                ...state,
                designationConfigDetailsFromState: state.designationConfigDetailsFromState.concat(action.payload)
              }

            case actionType.GETDESIGNATION:
                return {
                  ...state,
                  designationConfigDetailsFromState: action.payload
                }
              case actionType.ERRORMESSAGE:
                return {
                  ...state,
                  errorMessage: action.payload
                };
              case actionType.GETDESIGNATIONBYID:
                return {
                  ...state,
                  designationDetailsByID: action.payload
                }
              case actionType.UPDATEDESIGNATION:
                return {
                  ...state,
                  designationConfigDetailsFromState: state.designationConfigDetailsFromState.map(data => {
                    if (data.designationId === action.payload.designationId) {
                      return action.payload;
                    } else {
                      return data;
                    }
                  }),
                  designationStatus: action.designationStatus
                };
              case actionType.DELETEDESIGNATION:
                return {
                  ...state,
                  designationConfigDetailsFromState: state.designationConfigDetailsFromState.filter(
                    data => data.designationId !== action.payload
                  )
                };
        default:
            return state
    }
}