import { combineReducers } from "redux";
import { expandSideBarReducer } from "../themesReducer";
import { addEmployeeReducer } from "../fileReducer/addEmployeeReducer";
import { modelReducer } from "../fileReducer/modelReducer";
import { projectReducer } from "../fileReducer/projectReducer";
import { profileReducer } from "../fileReducer/profileReducer";

const rootReducer = combineReducers({
  expandSideBarStatus: expandSideBarReducer,
  addEmployeeData: addEmployeeReducer,
  modelOpen: modelReducer,
  roleAllocationData: projectReducer,
  basicInfo: profileReducer,
  passwordInfo: profileReducer
});

export default rootReducer;
