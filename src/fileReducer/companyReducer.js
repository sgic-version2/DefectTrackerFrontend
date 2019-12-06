import * as actionType from '../constant/companyConstant'

// const InitialState = {
//     companyDetailsFromState: [
//         {
//             reg_no: 'SGIC-001',
//             companyName: 'John Keels',
//             abbreviation: 'JK',
//             license_period: '6Yrs',
//             admin_name: 'John '
//          },
//     ]
// }

// export const companyReducer = (state = InitialState, action) => {
//     switch (action.type) {
//         case actionType.CREATENEWCOMPANY:
//             return {
//                 companyDetailsFromState: [...state.companyDetailsFromState, action.payload]
//             }
//         default:
//             return state
//     }
// }



const InitialState = {
    companyState: [],
    companyStatus: "",
    errorMessage: ""
  };
  
  export const companyReducer = (state = InitialState, action) => {
    switch (action.type) {
      case actionType.GETCOMPANY:
        return {
          ...state,
          companyState: action.payload
        };
      case actionType.CREATENEWCOMPANY:
        return {
          ...state,
          comanyState: state.comanyState.concat(action.payload),
          comanyStatus: state.comanyStatus.concat(action.status)
        };
      case actionType.SHOWERRORMESSAGE:
        return {
          ...state,
          errorMessage: action.payload
        };
      case actionType.EDITCOMPANY:
        return {
          ...state,
          defectState: state.defectState.map(data => {
            if (data.comapnyId == action.payload.companyId) {
              return action.payload;
            } else {
              return data;
            }
          })
        };
      case actionType.DELETECOMPANY:
        return {
          ...state,
          companyState: state.companyState.filter(
            data => data.companyId !== action.payload
          )
        };
      default:
        return state;
    }
  };
  