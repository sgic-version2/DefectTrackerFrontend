import { CHANGE_TIME_FORMAT, CHANGE_DATE_FORMAT, CHANGE_DAY_FORMAT } from './dateTimeSettingConstant';
export const changeTime =(data)=>{
    return{
        type:CHANGE_TIME_FORMAT,
        payload: data
    }
}

export const changeDate =(data)=>{
    return{
        type:CHANGE_DATE_FORMAT,
        payload: data
    }
}

export const changeDay =(data)=>{
    return{
        type:CHANGE_DAY_FORMAT,
        payload: data
    }
}