import { combineReducers } from "redux";
import { expandSideBarReducer } from "../themesReducer";
import { addEmployeeReducer } from "../fileReducer/addEmployeeReducer";
import { modelReducer } from "../fileReducer/modelReducer";
import { projectReducer } from "../fileReducer/projectReducer";
import { moduleReducer } from "../fileReducer/moduleReducer";

import { priorityConfigReducer } from "./../fileReducer/priorityConfigReducer";

import {
  showOnDashboardReducer,
  faviconReducer,
  systemLogoReducer
} from "../screens/Settings/settingReducer";
import { profileReducer } from "../fileReducer/profileReducer";
import { hrAllocationReducer } from "../fileReducer/hrAllocationReducer";

const rootReducer = combineReducers({
  expandSideBarStatus: expandSideBarReducer,
  addEmployeeData: addEmployeeReducer,
  modelOpen: modelReducer,
  roleAllocationData: projectReducer,
  moduleAllocationData: moduleReducer,
  priorityConfigData: priorityConfigReducer,
  lookAndFeelData: systemLogoReducer,
  showOnDashboard: showOnDashboardReducer,
  favicon: faviconReducer,
  profileDetails: profileReducer,
  expandSideBarStatus: expandSideBarReducer,
  addEmployeeData: addEmployeeReducer,
  modelOpen: modelReducer,
  roleAllocationData: projectReducer,
  hrAllocationData: hrAllocationReducer
});

export default rootReducer;
