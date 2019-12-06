import { combineReducers } from "redux";
import { expandSideBarReducer } from "../themesReducer";
import { addEmployeeReducer } from "../fileReducer/addEmployeeReducer";
import { companyReducer } from "./../fileReducer/companyReducer";
import { defectTypeReducer } from "./../fileReducer/defectTypeReducer";
import { projectDetailsReducer } from "./../fileReducer/projectDeatilsReducer";
import { severityConfigReducer } from './../fileReducer/severityConfigReducer';
import { modelReducer } from './../fileReducer/modelReducer';
import { projectReducer } from './../fileReducer/projectReducer';
import { editCompanyReducer } from './../fileReducer/editCompanyReducer';
import { priorityConfigReducer } from './../fileReducer/priorityConfigReducer';
import { addDefectStatusReducer } from './../fileReducer/addDefectStatusReducer';
import { defectReducer } from '../fileReducer/defectReducer';

import {
  showOnDashboardReducer,
  faviconReducer,
  systemLogoReducer
} from '../screens/Settings/settingReducer';
import { moduleReducer } from './../fileReducer/moduleReducer';

const rootReducer = combineReducers({
  expandSideBarStatus: expandSideBarReducer,
  addEmployeeData: addEmployeeReducer,
  companyData: companyReducer,
  defectTypeData: defectTypeReducer,
  projectDetailsData: projectDetailsReducer,
  editCompanyData:editCompanyReducer,
  severityConfigData: severityConfigReducer,
  modelOpen: modelReducer,
  roleAllocationData: projectReducer,
  moduleAllocationData: moduleReducer,
  priorityConfigData: priorityConfigReducer,
  lookAndFeelData: systemLogoReducer,
  showOnDashboard: showOnDashboardReducer,
  favicon: faviconReducer,
  companyData: companyReducer,
  addDefectStatusReducer: addDefectStatusReducer,
  defectState: defectReducer,
});
export default rootReducer;
