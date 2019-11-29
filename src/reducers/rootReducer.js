import { combineReducers } from "redux";
import { expandSideBarReducer } from "../themesReducer";
import { addEmployeeReducer } from "../fileReducer/addEmployeeReducer";
import { modelReducer } from "../fileReducer/modelReducer";
import { projectReducer } from "../fileReducer/projectReducer";
import { profileReducer } from "../fileReducer/profileReducer";
import { combineReducers } from "redux";
import { expandSideBarReducer } from "../themesReducer";
import { addEmployeeReducer } from "../fileReducer/addEmployeeReducer";
import { modelReducer } from "../fileReducer/modelReducer";
import { projectReducer } from "../fileReducer/projectReducer";
import { hrAllocationReducer } from "../fileReducer/hrAllocationReducer";

const rootReducer = combineReducers({
  expandSideBarStatus: expandSideBarReducer,
  addEmployeeData: addEmployeeReducer,
  modelOpen: modelReducer,
  roleAllocationData: projectReducer,
  profileDetails: profileReducer,
  expandSideBarStatus: expandSideBarReducer,
  addEmployeeData: addEmployeeReducer,
  modelOpen: modelReducer,
  roleAllocationData: projectReducer,
  hrAllocationData: hrAllocationReducer
});

export default rootReducer;
