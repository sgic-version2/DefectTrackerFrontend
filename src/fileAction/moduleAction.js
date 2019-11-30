import * as actionType from '../constant/muduleAllocation';

export const moduleAllocation = data => {
  return {
    type: actionType.MODULEALLOCATION,
    payload: {
      data
    }
  };
};
