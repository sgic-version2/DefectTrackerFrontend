import { combineReducers } from 'redux'
import { expandSideBarReducer } from '../themesReducer'
import { addEmployeeReducer } from '../fileReducer/addEmployeeReducer'
<<<<<<< HEAD
import { modelReducer } from '../fileReducer/modelReducer'
import { projectReducer } from '../fileReducer/projectReducer'
import { addCompanyEmployeeReducer } from '../fileReducer/addCompanyEmployeeReducer'
import { auditReducer } from '../fileReducer/auditReducer'
import { addDefectReducer } from '../fileReducer/addDefectReducer'
const rootReducer = combineReducers({
    expandSideBarStatus: expandSideBarReducer,
    addEmployeeData: addEmployeeReducer,
    modelOpen: modelReducer,
    roleAllocationData: projectReducer,
    addCompanyEmployeeData: addCompanyEmployeeReducer,
    exportAudit:auditReducer,
    addDefectData:addDefectReducer,
=======
import { companyReducer } from './../fileReducer/companyReducer';
import { defectTypeReducer } from './../fileReducer/defectTypeReducer';
import {projectDetailsReducer} from './../fileReducer/projectDeatilsReducer'
const rootReducer = combineReducers({
    expandSideBarStatus: expandSideBarReducer,
    addEmployeeData: addEmployeeReducer,
    companyData: companyReducer,
    defectTypeData: defectTypeReducer,
    projectDetailsData: projectDetailsReducer,

>>>>>>> jeyaamuthan
})

export default rootReducer