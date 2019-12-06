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
import { defectReducer } from '../fileReducer/defectReducer'
import { addDefectStatusReducer } from './../fileReducer/addDefectStatusReducer';
import { moduleReducer } from '../fileReducer/moduleReducer';
import { priorityConfigReducer } from './../fileReducer/priorityConfigReducer';

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
    addCompanyEmployeeData: addCompanyEmployeeReducer,
    exportAudit:auditReducer,
    
    comanyState: companyReducer,
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

  

