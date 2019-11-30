import { combineReducers } from 'redux'
import { expandSideBarReducer } from '../themesReducer'
import { addEmployeeReducer } from '../fileReducer/addEmployeeReducer'
import { companyReducer } from './../fileReducer/companyReducer';
import { defectTypeReducer } from './../fileReducer/defectTypeReducer';
import {projectDetailsReducer} from './../fileReducer/projectDeatilsReducer'
import { addDefectStatusReducer } from './../fileReducer/addDefectStatusReducer';

const rootReducer = combineReducers({
    expandSideBarStatus: expandSideBarReducer,
    addEmployeeData: addEmployeeReducer,
    companyData: companyReducer,
    defectTypeData: defectTypeReducer,
    projectDetailsData: projectDetailsReducer,
    addDefectStatusReducer:addDefectStatusReducer,

})

export default rootReducer