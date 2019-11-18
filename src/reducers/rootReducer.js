import { combineReducers } from 'redux'
import { themeReducer, expandSideBarReducer } from '../themesReducer'
const rootReducer = combineReducers({
    themesStatus: themeReducer,
    expandSideBarStatus: expandSideBarReducer
})

export default rootReducer