import { BACKGROUND_IMAGE, DARKORLIGHT } from './themesConstant'



const initialState = {
    themesStatus: true
}
const themeReducer = (state = initialState, action) => {
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
export default themeReducer