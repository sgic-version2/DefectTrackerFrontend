import React, { Component } from "react";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import "./profile.css";
// import User from "../../Assets/tony.png";

export default class profilePictureUpload extends Component {
  state = {
    // fileUpload: "",
    id: 1,
    fileUpload: ""
    // size: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    this.props.imageUploadChangeControl(e.target.value);
  };
  
  render() {
    const { fileUpload } = this.state;
    return (
      <div>
        {/* <div className="profile-model"> */}
        <div className="basicInfo">
          <label for="txt-profile-photo" className="txt-profile-photo">
            Profile Photo
          </label>
          <label for="txt-upload-photo" className="txt-upload-photo">
            Upload Photo
          </label>
          <img
            className="avatar"
            src={this.props.profileDetailsImage}
            alt="userimage"
          />

          <input
            type="file"
            id="fileUplaod"
            className="uploadFile"
            name="fileUpload"
            onChange={this.handleChange}
            value={fileUpload}
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
      </div>
      // </div>
    );
  }
}
