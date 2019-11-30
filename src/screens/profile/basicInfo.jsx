import React, { Component } from "react";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import AccountBoxOutlinedIcon from "@material-ui/icons/AccountBoxOutlined";
import MailOutlineOutlinedIcon from "@material-ui/icons/MailOutlineOutlined";
import LanguageOutlinedIcon from "@material-ui/icons/LanguageOutlined";
import PublishOutlinedIcon from "@material-ui/icons/PublishOutlined";
import "./profile.css";

export default class basicInfo extends Component {
  state = {
    id: 1,
    username: "jrstark@24",
    firstName: "Tony",
    lastName: "Stark",
    mail: "tony@93@gmail.com",
    webSite: "gmail"
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.profileDetailsBasicInfo(this.state);
  };

  render() {
    const { username, firstName, lastName, mail, webSite } = this.state;

    return (
      <div>
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
              value={username}
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
              value={firstName}
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
              value={lastName}
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
              value={mail}
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
              value={webSite}
            />

            <i className="update-icon">
              <PublishOutlinedIcon />
            </i>
            <button className="btn-update">Update</button>
          </form>
        </div>
      </div>
    );
  }
}
