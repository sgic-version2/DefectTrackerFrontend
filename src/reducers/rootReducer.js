import { combineReducers } from 'redux'
import {  expandSideBarReducer } from '../themesReducer'
const rootReducer = combineReducers({
    expandSideBarStatus: expandSideBarReducer,
    // themeReducer:themeReducer
})

export default rootReducer