import * as actionType from '../constant/auditConstant'

export const exportAudit = (data) => {
    return {
        type: actionType.EXPORTAUDIT,
        payload:
        {
            data
        }
    }
}
