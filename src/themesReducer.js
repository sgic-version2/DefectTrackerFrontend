import { BACKGROUND_IMAGE, DARKORLIGHT } from './themesConstant'
import { EXPANDWITHOUTBUTTON, EXPANDWITHBUTTON } from './expandContant'


const InitialmarginSize = 80
const ExpandmarginSize = 250
const initialState = {
    themesStatus: true,
    expandStatus: true,
    expandButtonStatus: true,
    marginSize: InitialmarginSize,
    display: 'none',
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
            if (state.marginSize === InitialmarginSize) {
                return {
                    marginSize: ExpandmarginSize,
                    display: 'block',
                    expandButtonStatus: !state.expandButtonStatus
                }
            } else {
                return {
                    marginSize: InitialmarginSize,
                    display: 'none',
                    expandButtonStatus: !state.expandButtonStatus
                }
            }
        case EXPANDWITHOUTBUTTON:
            if (!state.expandButtonStatus) {
                if (this.state.marginSize === InitialmarginSize) {
                    this.setState({
                        marginSize: ExpandmarginSize,
                        display: 'block'
                    })
                } else {
                    this.setState({
                        marginSize: InitialmarginSize,
                        display: 'none'
                    })
                }
            }
            return {
                state: !state.expandStatus
            }
        default:
            return state
    }
}
