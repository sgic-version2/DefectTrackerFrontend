import { BACKGROUND_IMAGE, DARKORLIGHT } from './themesConstant'
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
export const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case DARKORLIGHT:
            if (state.themesStatus === true) {
                console.log('d')
                return {
                    themesStatus: false,
                    blockContent: true,
                    backgroundOrThemeStatus: true
                }
            } else {
                return {
                    themesStatus: true,
                    blockContent: false,
                    backgroundOrThemeStatus: false
                }
            }
        case BACKGROUND_IMAGE:
            return {
                themesStatus: !state.themesStatus,
                blockContent: true,
                backgroundOrThemeStatus: true
            }
        default:
            return state
    }
}
export const expandSideBarReducer = (state = initialState, action) => {
    switch (action.type) {
        case EXPANDWITHBUTTON:
            if (state.expandStatus && !state.themesStatus) {
                return {
                    backgroundOrThemeStatus: false,
                    marginSize: ExpandmarginSize,
                    display: 'block',
                    expandStatus: !state.expandStatus,
                    expandButtonStatus: !state.expandButtonStatus
                }
            } else if (!state.expandStatus && !state.themesStatus) {
                return {
                    backgroundOrThemeStatus: true,
                    marginSize: InitialmarginSize,
                    display: 'none',
                    expandStatus: !state.expandStatus,
                    expandButtonStatus: !state.expandButtonStatus
                }
            } else if (!state.expandStatus && state.themesStatus) {
                return {
                    backgroundOrThemeStatus: false,
                    marginSize: InitialmarginSize,
                    display: 'none',
                    expandStatus: !state.expandStatus,
                    expandButtonStatus: !state.expandButtonStatus
                }
            } else if (state.expandStatus && state.themesStatus) {
                return {
                    backgroundOrThemeStatus: false,
                    marginSize: ExpandmarginSize,
                    display: 'block',
                    expandStatus: !state.expandStatus,
                    expandButtonStatus: !state.expandButtonStatus
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
                        expandStatus: !state.expandStatus
                    }
                } else if (!state.expandStatus && !state.themesStatus) {
                    return {
                        backgroundOrThemeStatus: true,
                        marginSize: InitialmarginSize,
                        display: 'none',
                        expandStatus: !state.expandStatus
                    }
                } else if (!state.expandStatus && state.themesStatus) {
                    return {
                        backgroundOrThemeStatus: false,
                        marginSize: InitialmarginSize,
                        display: 'none',
                        expandStatus: !state.expandStatus
                    }
                } else if (state.expandStatus && !state.themesStatus) {
                    return {
                        backgroundOrThemeStatus: false,
                        marginSize: ExpandmarginSize,
                        display: 'block',
                        expandStatus: !state.expandStatus
                    }
                }


                // if (state.expandStatus && !state.themesStatus) {
                //     return {
                //         backgroundOrThemeStatus: false,
                //         marginSize: ExpandmarginSize,
                //         display: 'block',
                //         expandStatus: !state.expandStatus
                //     }
                // } else if (!state.expandStatus && !state.themesStatus) {
                //     return {
                //         backgroundOrThemeStatus: true,
                //         marginSize: InitialmarginSize,
                //         display: 'none',
                //         expandStatus: !state.expandStatus
                //     }
                // } else if (!state.expandStatus && state.themesStatus) {
                //     return {
                //         backgroundOrThemeStatus: false,
                //         marginSize: InitialmarginSize,
                //         display: 'none',
                //         expandStatus: !state.expandStatus
                //     }
                // } else if (state.expandStatus && state.themesStatus) {
                //     return {
                //         backgroundOrThemeStatus: false,
                //         marginSize: ExpandmarginSize,
                //         display: 'block',
                //         expandStatus: !state.expandStatus
                //     }
                // }
            } else {
                return state
            }
            break;
        default:
            return state
    }
}
