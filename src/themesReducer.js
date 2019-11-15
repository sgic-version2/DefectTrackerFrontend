import { BACKGROUND_IMAGE, DARKORLIGHT } from './themesConstant'
import { EXPANDWITHOUTBUTTON, EXPANDWITHBUTTON } from './expandContant'



const initialState = {
    themesStatus: true,
    expandStatus: true,
    expandButtonStatus: true
}
export const themeReducer = (state = initialState.themesStatus, action) => {
    switch (action.type) {
        case DARKORLIGHT:
            return {
                state: false
            }
        case BACKGROUND_IMAGE:
            return {
                state: true
            }
        default:
            return state
    }
}


export const expandSideBarReducer = (state = initialState, action) => {
    switch (action.type) {
        case EXPANDWITHBUTTON:
            return {
                state: !state.expandButtonStatus
            }
        case EXPANDWITHOUTBUTTON:
            return{
                state:!state.expandStatus
            }
            default:
                return state
    }
}
