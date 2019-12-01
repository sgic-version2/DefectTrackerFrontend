import * as actionType from "../constant/defectTypeConstant";

const InitialState = {
  defectTypeDetailsFromState: [],
  defectTypeUpdateDetails: [
    {
      typeId: "1",
      name: "",
      defectValue: "",
      description: ""
    }
  ]
};

export const defectTypeReducer = (state = InitialState, action) => {
  switch (action.type) {
    case actionType.CREATENEWDEFECTTYPE:
      return {
        defectTypeDetailsFromState: [
          ...state.defectTypeDetailsFromState,
          action.payload
        ]
      };

    case actionType.UPDATE_DEFECT_TYPE:
      return {
        defectTypeUpdateDetails: [
          ...state.defectTypeUpdateDetails.filter(
            updateInfo => updateInfo.typeId !== action.payload.typeId
          ),
          action.payload
        ]
      };

    default:
      return state;
  }
};
