import {
  // IMAGE_UPLOAD_INPUT_CHANGE,
  IMAGE_UPLOAD,
  // PASSWORD_INFO_INPUT_CHANGE,
  PASSWORD_INFO_UPDATE,
  // BASIC_INFO_INPUT_CHANGE,
  BASIC_INFO_UPDATE
} from "../constant/profileConstant";

const InitialState = {
  imageUplaodDetails: {
    id: 1,
    fileUpload:
      "https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg"
  },

  basicInfo: [
    {
      id: 1,
      username: "stark@93",
      firstName: "Stark",
      lastName: "Tony",
      mail: "stark@gmail.com",
      webSite: "jrstark@blogspot.com"
    }
  ],

  passwordInfo: [
    {
      id: 1,
      currentPassword: "123",
      newPassword: "456",
      confirmPassword: "456"
    }
  ]
};

export const profileReducer = (state = InitialState, action) => {
  switch (action.type) {
    case IMAGE_UPLOAD:
      return {
        imageUplaodDetails: action.payload
      };

    case BASIC_INFO_UPDATE:
      return {
        basicInfo: [
          ...state.basicInfo.filter(
            basicInfoDetails => basicInfoDetails.id !== action.payload.id
          ),
          action.payload
        ]
      };

    case PASSWORD_INFO_UPDATE:
      return {
        passwordInfo: [
          ...state.passwordInfo.filter(
            passwordInfoDetails => passwordInfoDetails.id !== action.payload.id
          ),
          action.payload
        ]
      };

    default:
      return state;
  }
};
