import { combineReducers } from "redux";
import { expandSideBarReducer } from "../themesReducer";
import { addEmployeeReducer } from "../screens/employee/addEmployeeReducer";
import {
  showOnDashboardReducer,
  faviconReducer,
  systemLogoReducer
} from "../screens/Settings/settingReducer";
const rootReducer = combineReducers({
  expandSideBarStatus: expandSideBarReducer,
  addEmployeeData: addEmployeeReducer,
  lookAndFeelData: systemLogoReducer,
  showOnDashboard: showOnDashboardReducer,
  favicon: faviconReducer
});

export default rootReducer;
