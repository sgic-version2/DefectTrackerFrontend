import { CHANGE_SIDEBAR_COLOR } from './sideBarColorSettingConstant';
export const changeSidebarColor =(data)=>{
    return{
        type:CHANGE_SIDEBAR_COLOR,
        payload: data
    }
}