import { combineReducers } from 'redux';
import { expandSideBarReducer } from '../themesReducer';
import { addEmployeeReducer } from '../fileReducer/addEmployeeReducer';
import { modelReducer } from '../fileReducer/modelReducer';
import { projectReducer } from '../fileReducer/projectReducer';
import { moduleReducer } from '../fileReducer/moduleReducer';
import { priorityConfigReducer } from './../fileReducer/priorityConfigReducer';
import { companyReducer } from './../fileReducer/companyReducer';
import { defectTypeReducer } from './../fileReducer/defectTypeReducer';
import { projectDetailsReducer } from './../fileReducer/projectDeatilsReducer'
import { addDefectStatusReducer } from './../fileReducer/addDefectStatusReducer';
import { defectReducer } from '../fileReducer/defectReducer'
import {
  showOnDashboardReducer,
  faviconReducer,
  systemLogoReducer
} from '../screens/Settings/settingReducer';
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
  companyData: companyReducer,
  defectTypeData: defectTypeReducer,
  projectDetailsData: projectDetailsReducer,
  addDefectStatusReducer: addDefectStatusReducer,
  defectState: defectReducer,
});
export default rootReducer;
