import * as actionType from '../constant/projectDetailsConstant'


const InitialState = {
  projectDetailsFromState: [],
  errorMessage: '',
  projectDetailsByID: [],
  projectStatus: ''
}

export const projectDetailsReducer = (state = InitialState, action) => {
  switch (action.type) {
    case actionType.GETPROJECT:
      return {
        ...state,
        projectDetailsFromState: action.payload
      }
    case actionType.CREATENEWPROJECT:
      return {
        ...state,
        projectDetailsFromState: state.projectDetailsFromState.concat(action.payload)
      }
    case actionType.ERRORMESSAGE:
      return {
        ...state,
        errorMessage: action.payload
      };
    case actionType.GETPROJECTBYID:
      return {
        ...state,
        projectDetailsByID: action.payload
      }
    case actionType.UPDATEPROJECT:
      return {
        ...state,
        projectDetailsFromState: state.projectDetailsFromState.map(data => {
          if (data.project_id == action.payload.project_id) {
            return action.payload;
          } else {
            return data;
          }
        }),
        projectStatus: action.projectStatus
      };
    case actionType.DELETEPROJECT:
      return {
        ...state,
        projectDetailsFromState: state.projectDetailsFromState.filter(
          data => data.project_id !== action.payload
        )
      };
    default:
      return state
  }
}
