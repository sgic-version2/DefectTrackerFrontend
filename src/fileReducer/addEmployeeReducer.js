import * as actionType from '../constant/addEmployeeConstant';
import { EDITROLE } from '../constant/role';

const InitialState = {
<<<<<<< HEAD
    employeeDetailsFromState: [
        {
            key: '0',
            employeeID: '001',
            employeeName: 'sasee',
            employeeDesignation: 'SE',
            employeeEmail: 'sasee9488@gmail.com',
            availability: '90',
            role: ''
        },
        {
            key: '1',
            employeeID: '002',
            employeeName: 'kumar',
            employeeDesignation: 'ASE',
            employeeEmail: 'sasee9488@gmail.com',
            availability: '30',
            role: 'ASE'
        }
    ]
}
=======
  employeeDetailsFromState: [
    {
      key: '1',
      employeeID: '001',
      employeeName: 'sasee',
      employeeDesignation: 'SE',
      employeeEmail: 'sasee9488@gmail.com',
      availability: '90',
      role: 'SE'
    },
    {
      key: '2',
      employeeID: '002',
      employeeName: 'kumar',
      employeeDesignation: 'ASE',
      employeeEmail: 'sasee9488@gmail.com',
      availability: '30',
      role: 'ASE'
    }
  ]
};
>>>>>>> sasikumar

export const addEmployeeReducer = (state = InitialState, action) => {
  switch (action.type) {
    case actionType.CREATENEWEMPLOYEE:
      return {
        employeeDetailsFromState: [
          ...state.employeeDetailsFromState,
          action.payload
        ]
      };
    case EDITROLE:
      return {
        employeeDetailsFromState: [
          ...state.employeeDetailsFromState.filter(
            data => data.employeeID !== action.payload.employeeID
          ),
          action.payload
        ]
      };
    default:
      return state;
  }
};
