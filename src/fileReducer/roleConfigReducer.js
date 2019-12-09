import * as actionType from '../constant/roleConfigConstant'

const InitialState = {
    roleDetailsFromState: [],
    errorMessage: '',
    roleDetailsByID: [],
    roleStatus: ''
  }

export const roleConfigReducer = (state = InitialState, action) => {
    switch (action.type) {
        case actionType.CREATEROLE:
            return {
                ...state,
                roleDetailsFromState: state.roleDetailsFromState.concat(action.payload)
              }

            case actionType.GETROLE:
                return {
                  ...state,
                  roleDetailsFromState: action.payload
                }
              case actionType.ERRORMESSAGE:
                return {
                  ...state,
                  errorMessage: action.payload
                };
              case actionType.GETROLEBYID:
                return {
                  ...state,
                  roleDetailsByID: action.payload
                }
              case actionType.UPDATEROLE:
                return {
                  ...state,
                  roleDetailsFromState: state.roleDetailsFromState.map(data => {
                    if (data.rid === action.payload.rid) {
                      return action.payload;
                    } else {
                      return data;
                    }
                  }),
                  roleStatus: action.roleStatus
                };
              case actionType.DELETEROLE:
                return {
                  ...state,
                  roleDetailsFromState: state.roleDetailsFromState.filter(
                    data => data.rid !== action.payload
                  )
                };
        default:
            return state
    }
}