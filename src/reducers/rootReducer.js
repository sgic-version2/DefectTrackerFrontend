import { combineReducers } from 'redux'
import { expandSideBarReducer } from '../themesReducer'
import { addEmployeeReducer } from '../fileReducer/addEmployeeReducer'
import { modelReducer } from '../fileReducer/modelReducer'
const rootReducer = combineReducers({
    expandSideBarStatus: expandSideBarReducer,
    addEmployeeData: addEmployeeReducer,
    modelOpen: modelReducer
})

export default rootReducer