import * as actionType from '../constant/projectConstant'

export const roleAllocation = (data) => {
    return {
        type: actionType.ROLEALLOCATION,
        payload: data
    }
}
export const deAllocation = (data) => {
    return {
        type: actionType.DEALLOCATION,
        payload: {
            data
        }
    }
}