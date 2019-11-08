import React, { Component } from 'react'
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined';
import PublishOutlinedIcon from '@material-ui/icons/PublishOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import './profile.css'
import User from '../assets/tony.png'
import BlueNight from '../assets/flo.jpg'

export default class Profile extends Component {
    render() {
        return (
            <>
            <img src = {BlueNight}/>
            <div className = "form-background">

            </div>
                <div className="profile-model">
                    <div className="basicInfo">
                        <label className="txt-profile-photo">Profile Photo</label>
                        <label className="txt-upload-photo">Upload Photo</label>
                        <img className="avatar" src={User} />

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

                    <div className="changePassword">
                        <label className="txt-basicInfo">Change Password</label>
                        <form action="" className="">
                            <i className="pwd-icon-1"><LockOutlinedIcon /></i>
                            <input type="password" className="txt-pwd-1" placeholder="Verify Current Password" />

                            <a href="#">Generate Strong Password</a>
                            <i className="pwd-icon-2"><LockOutlinedIcon /></i>
                            <input type="password" className="txt-pwd-2" placeholder="New Password" />

                            <i className="pwd-icon-3"><LockOutlinedIcon /></i>
                            <input type="password" className="txt-pwd-3" placeholder="Confirm New Password" />

                            <i className="pwd-update-icon"><PublishOutlinedIcon /></i>
                            <button className="btn-pwd-update">Update</button>
                        </form>
                    </div>
                    <div className="otherField">
                        <label className="txt-basicInfo">Basic Information</label>
                        <form className="" action="">
                            {/* <label className = "lbl-username">Username</label> <br/> */}
                            <i className="user-icon"><PersonOutlineOutlinedIcon /></i>
                            <input type="text" className="txt-username" placeholder="Username" />

                            <i className="fname-icon"><AccountBoxOutlinedIcon /></i>
                            <input type="text" className="txt-firstname" placeholder="First Name" />

                            <i className="lname-icon"><AccountBoxOutlinedIcon /></i>
                            <input type="text" className="txt-lastname" placeholder="Last Name" />

                            <i className="mail-icon"><MailOutlineOutlinedIcon /></i>
                            <input type="text" className="txt-mail" placeholder="Email" />

                            <i className="website-icon"><LanguageOutlinedIcon /></i>
                            <input type="text" className="txt-website" placeholder="WebSite" />

                            <i className="update-icon"><PublishOutlinedIcon /></i>
                            <button className="btn-update">Update</button>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}
