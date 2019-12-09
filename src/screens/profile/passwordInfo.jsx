import React, { Component } from "react";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import PublishOutlinedIcon from "@material-ui/icons/PublishOutlined";

import { Link } from "react-router-dom";
import "./profile.css";

export default class passwordInfo extends Component {
  state = {
    id: 1,
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.passwordInfoChangeControl(this.state);
  };

  render() {
    // this.props.passwordInfoChangeControl;
    const { confirmNewPassword, currentPassword, newPassword } = this.state;
    return (
      <div>
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
              value={currentPassword}
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
              value={newPassword}
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
              value={confirmNewPassword}
            />

            <i className="pwd-update-icon">
              <PublishOutlinedIcon />
            </i>
            <button className="btn-pwd-update">Update</button>
          </form>
        </div>
      </div>
    );
  }
}
