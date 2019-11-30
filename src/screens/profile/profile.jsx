import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import { Segment, Image } from "semantic-ui-react";
import { connect } from "react-redux";
import {
  basicInfoChangeControl,
  passwordInfoChangeControl,
  imageUploadChangeControl
} from "../../fileAction/profileAction";

import ProfilePictureUpload from "./profilePictureUpload";
import PasswordInfo from "./passwordInfo";
import BasicInfo from "./basicInfo";

const mapStateToProps = state => ({
  profileDetailsImage: state.profileDetails.imageUplaodDetails,
  profileDetailsBasicInfo: state.profileDetails.basicInfo,
  profileDetailsPasswordInfo: state.profileDetails.passwordInfo
});

const mapDispatchToProps = {
  basicInfoChangeControl,
  passwordInfoChangeControl,
  imageUploadChangeControl
};
class Profile extends Component {
  render() {
      console.log('propsss', this.props.profileDetailsImage);

    const {
      imageUploadChangeControl,
      passwordInfoChangeControl,
      basicInfoChangeControl
    } = this.props;

    return (
      <Grid direction="row" container>
        <Grid item xs={11} style={{ marginTop: "2%" }}>
          <Segment style={{ height: "38%" }}>
            <div className="form-background"></div>
            <ProfilePictureUpload
              profileDetailsImage={this.props.profileDetailsImage.fileUpload}
              imageUploadChangeControl={imageUploadChangeControl}
            />
            <PasswordInfo
              passwordInfoChangeControl={passwordInfoChangeControl}
            />
            <BasicInfo profileDetailsBasicInfo={basicInfoChangeControl} />
          </Segment>
        </Grid>
      </Grid>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
