import * as actionType from '../constant/defectTypeConstant'
//import { CREATENEWDEFECTTYPE } from './../constant/defectTypeConstant';

const InitialState = {
    defectTypeDetailsFromState: [],
    errorMessage: '',
  defectTypeDetailsByID: [],
  defectTypeStatus: ''
}


export const defectTypeReducer = (state = InitialState, action) => {
    switch (action.type) {
        case actionType.GETDEFECTTYPE:
          return {
            ...state,
            defectTypeDetailsFromState: action.payload
          }
        case actionType.CREATENEWDEFECTTYPE:
          return {
            ...state,
            defectTypeDetailsFromState: state.defectTypeDetailsFromState.concat(action.payload)
          }
        case actionType.ERRORMESSAGE:
          return {
            ...state,
            errorMessage: action.payload
          };
        case actionType.GETPDEFECTTYPEBYID:
          return {
            ...state,
            defectTypeDetailsByID: action.payload
          }
        case actionType.EDITDEFECTTYPE:
          return {
            ...state,
            defectTypeDetailsFromState: state.defectTypeDetailsFromState.map(data => {
              if (data.typeId === action.payload.typeId) {
                return action.payload;
              } else {
                return data;
              }
            }),
            defectTypeStatus: action.defectTypeStatus
          };
        case actionType.DELETEDEFECTTYPE:
          return {
            ...state,
            defectTypeDetailsFromState: state.defectTypeDetailsFromState.filter(
              data => data.typeId !== action.payload
            )
          };
        default:
          return state
      }
    }