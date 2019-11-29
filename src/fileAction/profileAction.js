import {
  CHANGE_INPUT_BASIC_INFO,
  CHNAGE_INPUT_CHANGE_PASSWORD,
  UPDATE_PASSWORD,
  UPDATE_USER_DETAILS
} from "../constant/profileConstant";

export const basicInfoChangeControl = event => {
  return {
    type: CHANGE_INPUT_BASIC_INFO,
    payload: event
  };
};

export const changePasswordChangeControl = event => {
  return {
    type: CHNAGE_INPUT_CHANGE_PASSWORD,
    payload: {
      event
    }
  };
};

export const updateBasicInfo = eventId => {
  return {
    type: UPDATE_USER_DETAILS,
    payload: {
      eventId
    }
  };
};

export const updatePassword = eventId => {
  return {
    type: UPDATE_PASSWORD,
    payload: {
      eventId
    }
  };
};
