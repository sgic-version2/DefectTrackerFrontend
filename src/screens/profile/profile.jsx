import React, { Component } from 'react'
import AvatarUpload from './avatarUpload';
import BasicInfo from './basicInfo';
import PasswordInfo from './passwordInfo';
import './profile.css'

export default class Profile extends Component {
    render() {
        return (
            <>
                <AvatarUpload />
                <BasicInfo />
                <PasswordInfo />
            </>
        )
    }
}
