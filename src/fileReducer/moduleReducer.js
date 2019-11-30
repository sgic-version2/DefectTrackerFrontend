import * as actionType from '../constant/muduleAllocation';

const InitialState = {
  moduleAllocationData: [
    {
      key: '1',
      employeeID: '001',
      employeeName: 'ravi',
      employeeDesignation: 'ASE',
      employeeEmail: 'sdsdasdfs@gmail.com',
      availability: '30',
      role: 'ASE'
    },
    {
      key: '2',
      employeeID: '002',
      employeeName: 'mala',
      employeeDesignation: 'SE',
      employeeEmail: 'lkfdkmcxm8@gmail.com',
      availability: '30',
      role: 'SE'
    }
  ]
};

export const moduleReducer = (state = InitialState, action) => {
  switch (action.type) {
    case actionType.MODULEALLOCATION:
      return {
        moduleAllocationData: [...state.moduleAllocationData, action.payload]
      };

    default:
      return state;
  }
};
