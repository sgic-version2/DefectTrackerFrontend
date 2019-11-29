import { combineReducers } from "redux";
import { expandSideBarReducer } from "../themesReducer";
import { addEmployeeReducer } from "../fileReducer/addEmployeeReducer";
import { companyReducer } from "./../fileReducer/companyReducer";
import { defectTypeReducer } from "./../fileReducer/defectTypeReducer";
import { projectDetailsReducer } from "./../fileReducer/projectDeatilsReducer";
import { severityConfigReducer } from './../fileReducer/severityConfigReducer';
import { modelReducer } from './../fileReducer/modelReducer';
import { projectReducer } from './../fileReducer/projectReducer';
const rootReducer = combineReducers({
  expandSideBarStatus: expandSideBarReducer,
  addEmployeeData: addEmployeeReducer,
  companyData: companyReducer,
  defectTypeData: defectTypeReducer,
  projectDetailsData: projectDetailsReducer,
  expandSideBarStatus: expandSideBarReducer,
  addEmployeeData: addEmployeeReducer,
  severityConfigData: severityConfigReducer,
  modelOpen: modelReducer,
  roleAllocationData: projectReducer
});

export default rootReducer;
