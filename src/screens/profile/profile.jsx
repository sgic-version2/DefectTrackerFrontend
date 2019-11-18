import React, { Component } from 'react'
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined';
import PublishOutlinedIcon from '@material-ui/icons/PublishOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Link } from 'react-router-dom'

import './profile.css'
import User from '../../Assets/tony.png'
import { Grid } from '@material-ui/core';
import { Segment } from 'semantic-ui-react';
// import BlueNight from '../assets/flo.jpg'

export default class Profile extends Component {
    render() {
        return (
            <Grid direction="row" container>
                <Grid item xs={11} style={{ marginTop: '2%' }}>
                    <Segment>
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

                            <div className="changePassword">
                                <label className="txt-basicInfo">Change Password</label>
                                <form action="" className="">
                                    <i className="pwd-icon-1"><LockOutlinedIcon /></i>
                                    <input type="password" className="txt-pwd-1" placeholder="Verify Current Password" />

                                    <i className="pwd-icon-2"><LockOutlinedIcon /></i>
                                    <input type="password" className="txt-pwd-2" placeholder="New Password" />
                                    <Link id="generatePassword" href="/hghg">Generate Strong Password</Link>

                                    <i className="pwd-icon-3"><LockOutlinedIcon /></i>
                                    <input type="password" className="txt-pwd-3" placeholder="Confirm New Password" />

                                    <i className="pwd-update-icon"><PublishOutlinedIcon /></i>
                                    <button className="btn-pwd-update">Update</button>
                                </form>
                            </div>
                            <div className="otherField">
                                <label className="txt-basicInfo">Basic Information</label>
                                <form className="" action="">

                                    <i className="user-icon"><PersonOutlineOutlinedIcon /></i>
                                    <input type="text" id="txt-username" placeholder="Username" />

                                    <i className="fname-icon"><AccountBoxOutlinedIcon /></i>
                                    <input type="text" id="txt-firstname" placeholder="First Name" />

                                    <i className="lname-icon"><AccountBoxOutlinedIcon /></i>
                                    <input type="text" id="txt-lastname" placeholder="Last Name" />

                                    <i className="mail-icon"><MailOutlineOutlinedIcon /></i>
                                    <input type="text" id="txt-mail" placeholder="Email" />

                                    <i className="website-icon"><LanguageOutlinedIcon /></i>
                                    <input type="text" id="txt-website" placeholder="WebSite" />

                                    <i className="update-icon"><PublishOutlinedIcon /></i>
                                    <button className="btn-update">Update</button>
                                </form>
                            </div>
                        </div>
                    </Segment>
                </Grid>
            </Grid>
        )
    }
}
