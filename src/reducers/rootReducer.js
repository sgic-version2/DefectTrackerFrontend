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
import { companyReducer } from "./../fileReducer/companyReducer";
import { defectTypeReducer } from "./../fileReducer/defectTypeReducer";
import { projectDetailsReducer } from "./../fileReducer/projectDeatilsReducer";
import { severityConfigReducer } from "./../fileReducer/severityConfigReducer";
import { addCompanyEmployeeReducer } from "../fileReducer/addCompanyEmployeeReducer";
import { auditReducer } from "../fileReducer/auditReducer";
import { addDefectReducer } from "../fileReducer/addDefectReducer";

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
  hrAllocationData: hrAllocationReducer,
  companyData: companyReducer,
  defectTypeData: defectTypeReducer,
  projectDetailsData: projectDetailsReducer,
  expandSideBarStatus: expandSideBarReducer,
  severityConfigData: severityConfigReducer,
  addCompanyEmployeeData: addCompanyEmployeeReducer,
  exportAudit: auditReducer,
  addDefectData: addDefectReducer
});

export default rootReducer;
