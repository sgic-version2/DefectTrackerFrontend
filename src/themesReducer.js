import {  DARKORLIGHT } from './themesConstant'
import { EXPANDWITHOUTBUTTON, EXPANDWITHBUTTON } from './expandContant'


const InitialmarginSize = 80
const ExpandmarginSize = 250
const initialState = {
    themesStatus: true,
    expandStatus: true,
    expandButtonStatus: false,
    marginSize: InitialmarginSize,
    display: 'none',
    backgroundOrThemeStatus: false,

}

export const expandSideBarReducer = (state = initialState, action) => {
    switch (action.type) {
        case DARKORLIGHT:
                if (state.themesStatus) {
                    return {
                        themesStatus: false,
                        backgroundOrThemeStatus: true,
                        expandButtonStatus:state.expandButtonStatus,
                        marginSize:state.marginSize,
                        display:state.display,
                        expandStatus:state.expandStatus,
                    }
                } else {
                    return {
                        themesStatus: true,
                        backgroundOrThemeStatus: false,
                        expandButtonStatus:state.expandButtonStatus,
                        marginSize:state.marginSize,
                        display:state.display,
                        expandStatus:state.expandStatus,
                    }
                }
        case EXPANDWITHBUTTON:
            if (state.expandStatus && !state.themesStatus) {
                return {
                    backgroundOrThemeStatus: false,
                    marginSize: ExpandmarginSize,
                    display: 'block',
                    expandStatus: !state.expandStatus,
                    expandButtonStatus: !state.expandButtonStatus,
                    themesStatus:state.themesStatus
                }
            } else if (!state.expandStatus && !state.themesStatus) {
                return {
                    backgroundOrThemeStatus: true,
                    marginSize: InitialmarginSize,
                    display: 'none',
                    expandStatus: !state.expandStatus,
                    expandButtonStatus: !state.expandButtonStatus,
                    themesStatus:state.themesStatus
                }
            } else if (!state.expandStatus && state.themesStatus) {
                return {
                    backgroundOrThemeStatus: false,
                    marginSize: InitialmarginSize,
                    display: 'none',
                    expandStatus: !state.expandStatus,
                    expandButtonStatus: !state.expandButtonStatus,
                    themesStatus:state.themesStatus
                }
            } else if (state.expandStatus && state.themesStatus) {
                return {
                    backgroundOrThemeStatus: false,
                    marginSize: ExpandmarginSize,
                    display: 'block',
                    expandStatus: !state.expandStatus,
                    expandButtonStatus: !state.expandButtonStatus,
                    themesStatus:state.themesStatus
                }
            }
            break;
        case EXPANDWITHOUTBUTTON:
            if (!state.expandButtonStatus) {
                if (state.expandStatus && state.themesStatus) {
                    return {
                        backgroundOrThemeStatus: false,
                        marginSize: ExpandmarginSize,
                        display: 'block',
                        expandStatus: !state.expandStatus,
                        themesStatus:state.themesStatus
                    }
                } else if (!state.expandStatus && !state.themesStatus) {
                    return {
                        backgroundOrThemeStatus: true,
                        marginSize: InitialmarginSize,
                        display: 'none',
                        expandStatus: !state.expandStatus,
                        themesStatus:state.themesStatus
                    }
                } else if (!state.expandStatus && state.themesStatus) {
                    return {
                        backgroundOrThemeStatus: false,
                        marginSize: InitialmarginSize,
                        display: 'none',
                        expandStatus: !state.expandStatus,
                        themesStatus:state.themesStatus
                    }
                } else if (state.expandStatus && !state.themesStatus) {
                    return {
                        backgroundOrThemeStatus: false,
                        marginSize: ExpandmarginSize,
                        display: 'block',
                        expandStatus: !state.expandStatus,
                        themesStatus:state.themesStatus
                    }
                }
            } else {
                return state
            }
            break
        default:
            return state
    }
}
