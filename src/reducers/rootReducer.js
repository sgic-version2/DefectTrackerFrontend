import { combineReducers } from 'redux'
import { expandSideBarReducer } from '../themesReducer'
import { addEmployeeReducer } from '../fileReducer/addEmployeeReducer'
const rootReducer = combineReducers({
    expandSideBarStatus: expandSideBarReducer,
    addEmployeeData: addEmployeeReducer
})

export default rootReducer