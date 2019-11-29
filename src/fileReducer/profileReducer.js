import {
  CHANGE_INPUT_BASIC_INFO,
  CHNAGE_INPUT_CHANGE_PASSWORD,
  UPDATE_USER_DETAILS,
  UPDATE_PASSWORD
} from "../constant/profileConstant";

const InitialState = {
  basicInfo: [
    {
      id: 1,
      username: "stark@93",
      firstName: "Stark",
      lastName: "Tony",
      email: "stark@gmail.com",
      website: "jrstark@blogspot.com"
    }
  ],

  passwordInfo: [
    {
      currentPassword: "123",
      newPassword: "456",
      confirmPassword: "456"
    }
  ]
};

export const profileReducer = (state = InitialState, action, payload) => {
  switch (action.type) {
    case CHANGE_INPUT_BASIC_INFO:
      return {
        basicInfo: action.payload
      };

    case CHNAGE_INPUT_CHANGE_PASSWORD:
      return {
        passwordInfo: action.payload
      };
    default:
      return state;
  }
};
