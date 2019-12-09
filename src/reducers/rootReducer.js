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
import { designationConfigReducer } from './../fileReducer/designationConfigReducer';
import { roleConfigReducer } from './../fileReducer/roleConfigReducer';
import {
  showOnDashboardReducer,
  faviconReducer,
  systemLogoReducer
} from '../screens/Settings/settingReducer';
import { addCompanyEmployeeReducer } from '../fileReducer/addCompanyEmployeeReducer';
import { auditReducer } from '../fileReducer/auditReducer';
import { moduleReducer } from './../fileReducer/moduleReducer';

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
  priorityConfigData: priorityConfigReducer,
  lookAndFeelData: systemLogoReducer,
  showOnDashboard: showOnDashboardReducer,
  favicon: faviconReducer,
  companyData: companyReducer,
  addDefectStatusReducer: addDefectStatusReducer,
  defectState: defectReducer,
  emplyeeState: employeeReducer,
  designationConfigData: designationConfigReducer,
  roleConfigData: roleConfigReducer,

  addCompanyEmployeeData: addCompanyEmployeeReducer,
  exportAudit: auditReducer
});

export default rootReducer;
