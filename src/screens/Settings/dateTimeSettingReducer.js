import {
  CHANGE_TIME_FORMAT,
  CHANGE_DATE_FORMAT,
  CHANGE_DAY_FORMAT
} from "./dateTimeSettingConstant";
const initialState = {
  timeFormat: "h:mm a",
  dateFormat: "DD MM YYYY",
  dayFormat: "DD MM YYYY"
};

export const dateTimeSettingReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TIME_FORMAT:
      return { ...state, timeFormat: action.payload };

    case CHANGE_DATE_FORMAT:
      return { ...state, dateFormat: action.payload };

      case CHANGE_DAY_FORMAT:
      return { ...state, dayFormat: action.payload };
  }
  return state;
};
