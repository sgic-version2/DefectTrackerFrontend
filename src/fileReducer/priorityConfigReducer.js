import * as actionType from "../constant/priorityConfigConstant";

const InitialState = {
  priorityConfigDetailsFromState: [
    {
      id: "001",
      priorityName: "fddf",
      tempColor: "fgdfg",
      priorityDescription: "priorityDescription"
    }
  ]
};

export const priorityConfigReducer = (state = InitialState, action) => {
  switch (action.type) {
    case actionType.CREATEPRIORITY:
      return {
        priorityConfigDetailsFromState: [
          ...state.priorityConfigDetailsFromState,
          action.payload
        ]
      };
    default:
      return state;
  }
};
