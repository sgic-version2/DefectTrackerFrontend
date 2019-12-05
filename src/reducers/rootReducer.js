import { combineReducers } from "redux";
import { expandSideBarReducer } from "../themesReducer";
import { addEmployeeReducer } from "../screens/employee/addEmployeeReducer";
import { dateTimeSettingReducer } from "./../screens/Settings/dateTimeSettingReducer";
import sideBarColorReducer from "./../screens/Settings/sideBarColorReducer";
import { changeTime } from "./../screens/Settings/dateTimeSettingAction";
import { changeSidebarColor } from "./../screens/Settings/sideBarColorAction";
import {
  // showOnDashboardReducer,
  // faviconReducer,
  systemLogoReducer
} from "../screens/Settings/settingReducer";
const rootReducer = combineReducers({
  expandSideBarStatus: expandSideBarReducer,
  addEmployeeData: addEmployeeReducer,
  lookAndFeelData: systemLogoReducer,
  // showOnDashboard: showOnDashboardReducer,
  // favicon: faviconReducer,

  dateTimeSetting: dateTimeSettingReducer,
  sideBarColor: sideBarColorReducer,
  changeSidebarColor: changeSidebarColor
});

export default rootReducer;
