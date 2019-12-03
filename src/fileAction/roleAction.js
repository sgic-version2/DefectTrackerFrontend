import * as actionType from '../constant/role'

export const editRole = (data) => {
    return {
        type: actionType.EDITROLE,
        payload: data
    }
}