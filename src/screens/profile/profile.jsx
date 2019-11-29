import React, { Component } from "react";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import AccountBoxOutlinedIcon from "@material-ui/icons/AccountBoxOutlined";
import MailOutlineOutlinedIcon from "@material-ui/icons/MailOutlineOutlined";
import LanguageOutlinedIcon from "@material-ui/icons/LanguageOutlined";
import PublishOutlinedIcon from "@material-ui/icons/PublishOutlined";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Link } from "react-router-dom";

import "./profile.css";
import User from "../../Assets/tony.png";
import { Grid } from "@material-ui/core";
import { Segment, Image } from "semantic-ui-react";
import { connect } from "react-redux";
import {
  changePasswordChangeControl,
  basicInfoChangeControl
} from "../../fileAction/profileAction";
// import BlueNight from '../assets/flo.jpg'

const mapStateToProps = state => ({
  basicInfo: state.basicInfo.basicInfo,
  passwordInfo: state.passwordInfo.passwordInfo
});

const mapDispatchToProps = {
  changePasswordChangeControl,
  basicInfoChangeControl
};

class Profile extends Component {
  // state = {
  //   id: 1,
  //   username: "",
  //   firstName: "",
  //   lastName: "",
  //   mail: "",
  //   webSite: "",
  //   currentPassword: "",
  //   newPassword: "",
  //   confirmNewPassword: "",
  //   fileUpload: ""
  // };



  handleChange = e => {
    this.state.basicInfo[e.target.name] = e.target.value;
    console.log(this.state.basicInfo);
  };

  handleChangeImageUplaod = e => {
    this.setState({
      fileUpload: "./" + e.target.files[0].name
    });
    console.log(this.state.basicInfo);
  };
  // handleSubmit = e => {
  //   e.preventDefault();
  //   this.props.basicInfoChangeControl({});
  // };
  render() {
    // console.log();

    return (
      <Grid direction="row" container>
        <Grid item xs={11} style={{ marginTop: "2%" }}>
          <Segment>
            <div className="form-background"></div>
            <div className="profile-model">
              <div className="basicInfo">
                <label for="txt-profile-photo" className="txt-profile-photo">
                  Profile Photo
                </label>
                <label for="txt-upload-photo" className="txt-upload-photo">
                  Upload Photo
                </label>
                <img className="avatar" src={User} alt="userimage" />

                <input
                  type="file"
                  id="fileUplaod"
                  className="uploadFile"
                  name="fileUpload"
                  onChange={this.handleChangeImageUplaod}
                />
                <label className="imageUpload" for="fileUplaod">
                  <i className="icon">
                    <CloudUploadIcon />
                  </i>
                  Upload Image
                </label>
                <button className="takePhoto">
                  <i className="cameraIcon">
                    <PhotoCameraIcon />
                  </i>
                  <label for="btn-label" className="btn-label">
                    Take Photo
                  </label>
                </button>
              </div>

              <div className="changePassword">
                <label for="txt-basicInfo" className="txt-basicInfo">
                  Change Password
                </label>
                <form onSubmit={this.handleSubmit}>
                  <i className="pwd-icon-1">
                    <LockOutlinedIcon />
                  </i>
                  <input
                    type="password"
                    name="currentPassword"
                    className="txt-pwd-1"
                    placeholder="Verify Current Password"
                    onChange={this.handleChange}
                    value={this.props.basicInfo.currentPassword}
                  />

                  <i className="pwd-icon-2">
                    <LockOutlinedIcon />
                  </i>
                  <input
                    type="password"
                    name="newPassword"
                    className="txt-pwd-2"
                    placeholder="New Password"
                    onChange={this.handleChange}
                    value={this.props.basicInfo.newPassword}
                  />
                  <Link to="./" id="generatePassword" href="/hghg">
                    Generate Strong Password
                  </Link>

                  <i className="pwd-icon-3">
                    <LockOutlinedIcon />
                  </i>
                  <input
                    type="password"
                    name="confirmNewPassword"
                    className="txt-pwd-3"
                    placeholder="Confirm New Password"
                    onChange={this.handleChange}
                    value={this.props.basicInfo.confirmPassword}
                  />

                  <i className="pwd-update-icon">
                    <PublishOutlinedIcon />
                  </i>
                  <button className="btn-pwd-update">Update</button>
                </form>
              </div>
              <div className="otherField">
                <label for="txt-basicInfo" className="txt-basicInfo">
                  Basic Information
                </label>
                <form className="" onSubmit={this.handleSubmit}>
                  <i className="user-icon">
                    <PersonOutlineOutlinedIcon />
                  </i>
                  <input
                    type="text"
                    name="username"
                    id="txt-username"
                    placeholder="Username"
                    onChange={this.handleChange}
                    value={this.props.basicInfo.username}
                  />

                  <i className="fname-icon">
                    <AccountBoxOutlinedIcon />
                  </i>
                  <input
                    type="text"
                    name="firstName"
                    id="txt-firstname"
                    placeholder="First Name"
                    onChange={this.handleChange}
                    value={this.props.basicInfo.firstName}
                  />

                  <i className="lname-icon">
                    <AccountBoxOutlinedIcon />
                  </i>
                  <input
                    type="text"
                    name="lastName"
                    id="txt-lastname"
                    placeholder="Last Name"
                    onChange={this.handleChange}
                    value={this.props.basicInfo.lastName}
                  />

                  <i className="mail-icon">
                    <MailOutlineOutlinedIcon />
                  </i>
                  <input
                    type="text"
                    name="mail"
                    id="txt-mail"
                    placeholder="Email"
                    onChange={this.handleChange}
                    value={this.props.basicInfo.email}
                  />

                  <i className="website-icon">
                    <LanguageOutlinedIcon />
                  </i>
                  <input
                    type="text"
                    name="webSite"
                    id="txt-website"
                    placeholder="WebSite"
                    onChange={this.handleChange}
                    value={this.props.basicInfo.website}
                  />

                  <i className="update-icon">
                    <PublishOutlinedIcon />
                  </i>
                  <button className="btn-update">Update</button>
                </form>
              </div>
            </div>
          </Segment>
        </Grid>
      </Grid>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
