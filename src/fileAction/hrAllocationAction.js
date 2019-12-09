import * as actionType from '../constant/hrAllocationConstant'

export const hrAllocation = (data) => {
    return {
        type: actionType.HRALLOCATION,
        payload: data
    }
}
