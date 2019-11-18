import { BACKGROUND_IMAGE, DARKORLIGHT } from './themesConstant'
import { EXPANDWITHOUTBUTTON, EXPANDWITHBUTTON } from './expandContant'


const InitialmarginSize = 80
const ExpandmarginSize = 250
const initialState = {
    themesStatus: false,
    expandStatus: true,
    expandButtonStatus: false,
    marginSize: InitialmarginSize,
    display: 'none',
    backgroundOrThemeStatus:false,

}
export const themeReducer = (state = initialState.themesStatus, action) => {
    switch (action.type) {
        case DARKORLIGHT:
            return {
                themesStatus: !state.themesStatus
            }
        case BACKGROUND_IMAGE:
            return {
                themesStatus: !state.themesStatus
            }
        default:
            return state
    }
}
export const expandSideBarReducer = (state = initialState, action) => {
    switch (action.type) {
        case EXPANDWITHBUTTON:
                if (state.expandStatus  && !state.themesStatus ) {
                    return{
                        backgroundOrThemeStatus:false,
                        marginSize: ExpandmarginSize,
                        display: 'block',
                        expandStatus: !state.expandStatus,
                        expandButtonStatus: !state.expandButtonStatus
                    }
                  } else if (!state.expandStatus && !state.themesStatus) {
                      return{
                        backgroundOrThemeStatus:true,
                        marginSize: InitialmarginSize,
                        display: 'none',
                        expandStatus: !state.expandStatus,
                        expandButtonStatus: !state.expandButtonStatus
                      }
                  } else if (!state.expandStatus  && state.themesStatus) {
                    return{
                        backgroundOrThemeStatus:false,
                        marginSize: InitialmarginSize,
                        display: 'none',
                        expandStatus: !state.expandStatus,
                        expandButtonStatus: !state.expandButtonStatus
                    }
                  } else if (state.expandStatus  && state.themesStatus) {
                    return{
                        backgroundOrThemeStatus:false,
                        marginSize: ExpandmarginSize,
                        display: 'block',
                        expandStatus: !state.expandStatus,
                        expandButtonStatus: !state.expandButtonStatus
                    }
                  }
                  break;
        case EXPANDWITHOUTBUTTON:
            if (!state.expandButtonStatus) {
                if (state.expandStatus  && !state.themesStatus ) {
                    return{
                        backgroundOrThemeStatus:false,
                        marginSize: ExpandmarginSize,
                        display: 'block',
                        expandStatus: !state.expandStatus
                    }
                  } else if (!state.expandStatus && !state.themesStatus) {
                      return{
                        backgroundOrThemeStatus:true,
                        marginSize: InitialmarginSize,
                        display: 'none',
                        expandStatus: !state.expandStatus
                      }
                  } else if (!state.expandStatus  && state.themesStatus) {
                    return{
                        backgroundOrThemeStatus:false,
                        marginSize: InitialmarginSize,
                        display: 'none',
                        expandStatus: !state.expandStatus
                    }
                  } else if (state.expandStatus  && state.themesStatus) {
                    return{
                        backgroundOrThemeStatus:false,
                        marginSize: ExpandmarginSize,
                        display: 'block',
                        expandStatus: !state.expandStatus
                    }
                  }
            }
            break;
        default:
            return state
    }
}
