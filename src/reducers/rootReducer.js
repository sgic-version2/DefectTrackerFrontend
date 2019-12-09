<<<<<<< HEAD
import { combineReducers } from 'redux'
import { expandSideBarReducer } from '../themesReducer'
import { addEmployeeReducer } from '../fileReducer/addEmployeeReducer'
import { modelReducer } from '../fileReducer/modelReducer'
import { projectReducer } from '../fileReducer/projectReducer'
import { addCompanyEmployeeReducer } from '../fileReducer/addCompanyEmployeeReducer'
import { auditReducer } from '../fileReducer/auditReducer'
import { companyReducer } from './../fileReducer/companyReducer';
import { defectTypeReducer } from './../fileReducer/defectTypeReducer';
import {projectDetailsReducer} from './../fileReducer/projectDeatilsReducer'
=======
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
>>>>>>> jeyaamuthan
import { defectReducer } from '../fileReducer/defectReducer'
import { addDefectStatusReducer } from './../fileReducer/addDefectStatusReducer';
import { moduleReducer } from '../fileReducer/moduleReducer';
import { priorityConfigReducer } from './../fileReducer/priorityConfigReducer';
import {
  showOnDashboardReducer,
  faviconReducer,
  systemLogoReducer
} from '../screens/Settings/settingReducer';
<<<<<<< HEAD


const rootReducer = combineReducers({
    expandSideBarStatus: expandSideBarReducer,
    addEmployeeData: addEmployeeReducer,
    modelOpen: modelReducer,
    roleAllocationData: projectReducer,
    addCompanyEmployeeData: addCompanyEmployeeReducer,
    exportAudit:auditReducer,
    
    companyData: companyReducer,
    defectTypeData: defectTypeReducer,
    projectDetailsData: projectDetailsReducer,
    addDefectStatusReducer:addDefectStatusReducer,

    defectState: defectReducer,
    moduleAllocationData: moduleReducer,
    priorityConfigData: priorityConfigReducer,
    lookAndFeelData: systemLogoReducer,
  showOnDashboard: showOnDashboardReducer,
  favicon: faviconReducer,
})
 
 
  


export default rootReducer





=======
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
  defectStatusData: addDefectStatusReducer,
  defectState: defectReducer,
});
export default rootReducer;
>>>>>>> jeyaamuthan
