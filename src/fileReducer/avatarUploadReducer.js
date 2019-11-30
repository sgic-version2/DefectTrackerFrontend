import { AVATAR_UPLOAD_INPUT_CHANGE, UPLOAD_AVATAR } from '../constant/profileActionTypes';

const InitialState = {
    uploadDetails: [
        {
            fileName: 'tony',
            path: './path',
            size: '322222'
        }
    ]

}

export const avatarUploadReducer = (state = InitialState, action) => {
    switch (action.type) {
        case AVATAR_UPLOAD_INPUT_CHANGE:
            return {
                uploadDetails: action.payload
            };
        case UPLOAD_AVATAR:
            return {
                uploadDetails: action.payload
            };
        default:
            return state
    }
}