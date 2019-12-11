import { combineReducers } from 'redux';
import { expandSideBarReducer } from '../themesReducer';
import { addEmployeeReducer } from '../fileReducer/addEmployeeReducer';
import { modelReducer } from '../fileReducer/modelReducer';
import { projectReducer } from '../fileReducer/projectReducer';
import { priorityConfigReducer } from './../fileReducer/priorityConfigReducer';
import { companyReducer } from './../fileReducer/companyReducer';
import { defectTypeReducer } from './../fileReducer/defectTypeReducer';
import { projectDetailsReducer } from './../fileReducer/projectDeatilsReducer';
import { severityConfigReducer } from './../fileReducer/severityConfigReducer';
import { editCompanyReducer } from './../fileReducer/editCompanyReducer';
import { addDefectStatusReducer } from './../fileReducer/addDefectStatusReducer';
import { defectReducer } from '../fileReducer/defectReducer';
import { employeeReducer } from '../fileReducer/employeeReducer';
import {
  showOnDashboardReducer,
  faviconReducer,
  systemLogoReducer
} from '../screens/Settings/settingReducer';
import { addCompanyEmployeeReducer } from '../fileReducer/addCompanyEmployeeReducer';
import { auditReducer } from '../fileReducer/auditReducer';
import { moduleReducer } from './../fileReducer/moduleReducer';

import { serverityConfigReducer } from '../fileReducer/severityConfigReducer';
const rootReducer = combineReducers({
  expandSideBarStatus: expandSideBarReducer,
  addEmployeeData: addEmployeeReducer,
  companyData: companyReducer,
  defectTypeData: defectTypeReducer,
  projectDetailsData: projectDetailsReducer,
  editCompanyData: editCompanyReducer,
  severityConfigData: severityConfigReducer,
  modelOpen: modelReducer,
  roleAllocationData: projectReducer,
  moduleAllocationData: moduleReducer,
  severityState: serverityConfigReducer,
  lookAndFeelData: systemLogoReducer,
  showOnDashboard: showOnDashboardReducer,
  favicon: faviconReducer,
  addDefectStatusReducer: addDefectStatusReducer,
  defectState: defectReducer,
  emplyeeState: employeeReducer,

  addCompanyEmployeeData: addCompanyEmployeeReducer,
  exportAudit: auditReducer,
  priorityState: priorityConfigReducer
});

export default rootReducer;
