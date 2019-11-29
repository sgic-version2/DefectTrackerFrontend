import { combineReducers } from 'redux';
import { expandSideBarReducer } from '../themesReducer';
import { addEmployeeReducer } from '../fileReducer/addEmployeeReducer';
import { modelReducer } from '../fileReducer/modelReducer';
import { projectReducer } from '../fileReducer/projectReducer';
import { moduleReducer } from '../fileReducer/moduleReducer';
const rootReducer = combineReducers({
  expandSideBarStatus: expandSideBarReducer,
  addEmployeeData: addEmployeeReducer,
  modelOpen: modelReducer,
  roleAllocationData: projectReducer,
  moduleAllocationData: moduleReducer
});

export default rootReducer;
