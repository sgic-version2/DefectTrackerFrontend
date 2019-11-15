import { combineReducers } from 'redux'
import themeReducer from '../themesReducer'
const rootReducer = combineReducers({
    themesStatus: themeReducer
})

export default rootReducer