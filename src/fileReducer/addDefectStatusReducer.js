import * as actionType from '../constant/AddDefectStatusConstant'


const InitialState = {
    defectStatusDetailsFromState: [],
    errorMessage: '',
  defectStatusDetailsByID: [],
  defectStatusStatus: ''
}


export const addDefectStatusReducer = (state = InitialState, action) => {
    switch (action.type) {
        case actionType.GETDEFECTSTATUS:
          return {
            ...state,
            defectStatusDetailsFromState: action.payload
          }
        case actionType.CREATENEWDEFECTSTATUS:
          return {
            ...state,
            defectStatusDetailsFromState: state.defectStatusDetailsFromState.concat(action.payload)
          }
        case actionType.ERRORMESSAGE:
          return {
            ...state,
            errorMessage: action.payload
          };
        case actionType.GETPDEFECTSTATUSBYID:
          return {
            ...state,
            defectStatusDetailsByID: action.payload
          }
        case actionType.EDITDEFECTSTATUS:
          return {
            ...state,
            defectStatusDetailsFromState: state.defectStatusDetailsFromState.map(data => {
              if (data.statusId === action.payload.statusId) {
                return action.payload;
              } else {
                return data;
              }
            }),
            defectStatusStatus: action.defectStatusStatus
          };
        case actionType.DELETEDEFECTSTATUS:
          return {
            ...state,
            defectStatusDetailsFromState: state.defectStatusDetailsFromState.filter(
              data => data.statusId !== action.payload
            )
          };
        default:
          return state
      }
    }
    