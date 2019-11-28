import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import PublishOutlinedIcon from '@material-ui/icons/PublishOutlined';

import './profile.css';

export default class PasswordInfo extends Component {
    render() {
        return (
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
        )
    }
}