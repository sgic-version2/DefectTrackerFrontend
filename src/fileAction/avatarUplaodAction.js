import { AVATAR_UPLOAD_INPUT_CHANGE, UPLOAD_AVATAR } from '../fileConstant/profileActionTypes';

export const avatarUploadFieldChange = (event) => {
    return {
        type: AVATAR_UPLOAD_INPUT_CHANGE,
        event
    };
};

export const avatarUpload = (eventId) => {
    return {
        type: UPLOAD_AVATAR,
        eventId
    };
};