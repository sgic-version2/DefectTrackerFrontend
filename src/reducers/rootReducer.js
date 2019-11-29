import { combineReducers } from 'redux'
import { expandSideBarReducer } from '../themesReducer'
import { addEmployeeReducer } from '../fileReducer/addEmployeeReducer'
import { modelReducer } from '../fileReducer/modelReducer'
import { projectReducer } from '../fileReducer/projectReducer'
import { severityConfigReducer } from '../fileReducer/severityConfigReducer'
const rootReducer = combineReducers({
    expandSideBarStatus: expandSideBarReducer,
    addEmployeeData: addEmployeeReducer,
    severityConfigData:severityConfigReducer,
    modelOpen: modelReducer,
    roleAllocationData: projectReducer
})

export default rootReducer