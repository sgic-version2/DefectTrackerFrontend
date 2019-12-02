import * as actionType from '../constant/defectConstant'
import axios from 'axios'

const InitialState = {
    defectState: [],
    defectAddStatus:''
}

export const defectReducer = (state = InitialState, action) => {
    switch (action.type) {
        case actionType.ADDDEFECT:
            axios.post('http://127.0.0.1:8081/api/v1/defect',action.payload).then(response=>{
                console.log(response)
                return {
                    defectState:state.defectState=action.payload,
                    defectAddStatus:state.defectAddStatus=response.status
                }
            }).catch(err=>{
                console.log(err);
                
            })
        default:
            return state
    }
}