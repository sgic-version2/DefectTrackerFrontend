import * as actionType from '../constant/muduleAllocation';

const InitialState = {
  moduleAllocationData: [
    {
      key: '1',
      empname: 'ravi',
      module: 'login',
      role: 'ASE'
    },
    {
      key: '2',
      empname: 'mala',
      module: 'login',
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
