import * as actionType from '../constant/addEmployeeConstant';

const InitialState = {
  moduleAllocationData: []
};

export const moduleReducer = (state = InitialState, action) => {
  switch (action.type) {
    case actionType.MODULEALLOCATION:
      return {
        moduleAllocationData: [...state.roleAllocationData, action.payload]
      };

    default:
      return state;
  }
};
