import { combineReducers } from 'redux';
import { expandSideBarReducer } from '../themesReducer';
import { addEmployeeReducer } from '../fileReducer/addEmployeeReducer';
import { modelReducer } from '../fileReducer/modelReducer';
import { projectReducer } from '../fileReducer/projectReducer';
import { moduleReducer } from '../fileReducer/moduleReducer';
import { priorityConfigReducer } from './../fileReducer/priorityConfigReducer';
import { companyReducer } from './../fileReducer/companyReducer';

import { projectDetailsReducer } from './../fileReducer/projectDeatilsReducer'
import { addDefectStatusReducer } from './../fileReducer/addDefectStatusReducer';
import { defectReducer } from '../fileReducer/defectReducer'
import { defectTypeReducer } from "./../fileReducer/defectTypeReducer";
import {
  showOnDashboardReducer,
  faviconReducer,
  systemLogoReducer
} from '../screens/Settings/settingReducer';
import { serverityConfigReducer } from '../fileReducer/severityConfigReducer';
import { editCompanyReducer } from './../fileReducer/editCompanyReducer';
const rootReducer = combineReducers({
  expandSideBarStatus: expandSideBarReducer,
  addEmployeeData: addEmployeeReducer,
  companyData: companyReducer,
  defectTypeData: defectTypeReducer,
  projectDetailsData: projectDetailsReducer,
  editCompanyData:editCompanyReducer,
  severityConfigData: serverityConfigReducer,
  modelOpen: modelReducer,
  roleAllocationData: projectReducer,
  moduleAllocationData: moduleReducer,
  serverityState:serverityConfigReducer,
  lookAndFeelData: systemLogoReducer,
  showOnDashboard: showOnDashboardReducer,
  favicon: faviconReducer,
  companyData: companyReducer,
  defectStatusData: addDefectStatusReducer,
  defectState: defectReducer,
  priorityState:priorityConfigReducer,
  defectTypeData:defectTypeReducer
});
export default rootReducer;
