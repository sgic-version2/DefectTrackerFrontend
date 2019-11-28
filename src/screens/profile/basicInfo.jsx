import React, { Component } from 'react';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined';
import PublishOutlinedIcon from '@material-ui/icons/PublishOutlined';

import './profile.css'
export default class BasicInfo extends Component {
    render() {
        return (
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
        )
    }
}