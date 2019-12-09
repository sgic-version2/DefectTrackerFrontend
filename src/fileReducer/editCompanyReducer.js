import * as actionType from "../constant/companyConstant";

const InitialState = {
  dataStore: []
};

export const editCompanyReducer = (state = InitialState, action) => {
  switch (action.type) {
    case actionType.PUTEDITCOMPANY:
      return {
        dataStore: [(state.dataStore = action.payload)]
      };

    default:
      return state;
  }
};
