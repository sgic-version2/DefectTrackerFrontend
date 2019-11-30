import {
  // IMAGE_UPLOAD_INPUT_CHANGE,
  IMAGE_UPLOAD,
  // PASSWORD_INFO_INPUT_CHANGE,
  PASSWORD_INFO_UPDATE,
  // BASIC_INFO_INPUT_CHANGE,
  BASIC_INFO_UPDATE
} from "../constant/profileConstant";

export const imageUploadChangeControl = event => {
  return {
    type: IMAGE_UPLOAD,
    payload: event
  };
};

// export const imageUploadControl = eventId => {
//   return {
//     type: IMAGE_UPLOAD,
//     payload: eventId
//   };
// };

export const basicInfoChangeControl = event => {
  return {
    type: BASIC_INFO_UPDATE,
    payload: event
  };
};

// export const basicInfoUpdateControl = eventId => {
//   return {
//     type: BASIC_INFO_UPDATE,
//     payload: eventId
//   };
// };

export const passwordInfoChangeControl = event => {
  return {
    type: PASSWORD_INFO_UPDATE,
    payload: event
  };
};

// export const passwordUpdateControl = eventId => {
//   return {
//     type: PASSWORD_INFO_UPDATE,
//     payload: eventId
//   };
// };
