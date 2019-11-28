import React, { Component } from 'react'
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import BasicInfo from './basicInfo';
import PasswordInfo from './passwordInfo';
import './profile.css'
import User from '../../Assets/tony.png';

export default class AvatarUpload extends Component {
    render() {
        return (
            <div>
                <div className="form-background">
                </div>
                <div className="profile-model">
                    <div className="basicInfo">
                        <label className="txt-profile-photo">Profile Photo</label>
                        <label className="txt-upload-photo">Upload Photo</label>
                        <img className="avatar" src={User} alt='userimage' />

                        <input type="file" id="fileUplaod" className="uploadFile" />
                        <label className="imageUpload" for="fileUplaod">
                            <i className="icon"><CloudUploadIcon /></i>
                            Upload Image
                            </label>
                        <button className="takePhoto">
                            <i className="cameraIcon"><PhotoCameraIcon /></i>
                            <label className="btn-label">Take Photo</label>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
