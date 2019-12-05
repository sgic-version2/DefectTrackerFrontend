import { combineReducers } from 'redux'
import { expandSideBarReducer } from '../themesReducer'
import { addEmployeeReducer } from '../fileReducer/addEmployeeReducer'
import { modelReducer } from '../fileReducer/modelReducer'
import { projectReducer } from '../fileReducer/projectReducer'
import { priorityConfigReducer } from './../fileReducer/priorityConfigReducer';
// import { addEmployeeReducer } from "../screens/employee/addEmployeeReducer";
import {
  showOnDashboardReducer,
  faviconReducer,
  systemLogoReducer
} from "../screens/Settings/settingReducer";

const rootReducer = combineReducers({
    expandSideBarStatus: expandSideBarReducer,
    addEmployeeData: addEmployeeReducer,
    modelOpen: modelReducer,
    roleAllocationData: projectReducer,
    priorityConfigData:priorityConfigReducer,
    lookAndFeelData: systemLogoReducer,
    showOnDashboard: showOnDashboardReducer,
    favicon: faviconReducer,
    expandSideBarStatus: expandSideBarReducer,
    addEmployeeData: addEmployeeReducer,
})


export default rootReducer;
