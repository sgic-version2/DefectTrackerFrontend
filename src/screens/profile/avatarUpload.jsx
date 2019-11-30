import React, { Component } from 'react'
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import './profile.css'
import User from '../../Assets/tony.png';
import { connect } from 'react-redux'
import { avatarUploadFieldChange, avatarUpload } from '../../fileAction/profileAction'



const mapStatToProps = (state) => ({
    uploadDetails: state.uploadDetails
})

const mapDispatchToProps = {
    avatarUploadFieldChange,
    avatarUpload
}


class AvatarUpload extends Component {
    state = {
        fileUplaod: {
            fileName: '',
            path: '',
            size: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            fileUplaod: this.state.uploadDetails
        }
        )
        console.log(this.state.fileUplaod);
        
    }
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

                        <input type="file" id="fileUplaod" className="uploadFile" name="fileUplaod" value={this.state.fileUplaod.fileName} onChange={this.handleChange} />
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

export default connect(mapStatToProps, mapDispatchToProps)(AvatarUpload);