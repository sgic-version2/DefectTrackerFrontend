
// import * as actionType from "./settingConstant";
import { SYSTEM_LOGO_CHANGE } from './settingConstant';
import { SHOW_ON_DASHBOARD_SIDEBAR } from './settingConstant';
import { FAVICON_CHANGE } from './settingConstant';

export const systemLogoChange = (data) => {
    return {
        type: SYSTEM_LOGO_CHANGE,
        payload: data 

    }
}

export const showOnDashboard = () => {
    return {
        type: SHOW_ON_DASHBOARD_SIDEBAR,

    }
}

export const faviconChange = (data) => {
    return {
        type: FAVICON_CHANGE,
        payload: data 

    }
}



