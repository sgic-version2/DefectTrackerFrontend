import * as actionType from '../constant/defectConstant'


const InitialState = {
    defectState: [],
    defectAddStatus:''
}

export const defectReducer = (state = InitialState, action) => {
    switch (action.type) {
        case actionType.ADDDEFECT:
          return{
              ...state,
              defectState:state.defectState.concat(action.payload)
          }
        default:
            return state
    }
}