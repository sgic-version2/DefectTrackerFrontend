import React, { Component, Fragment } from "react";
import SystemSettings from "./systemSetting";
import TitleSettings from "./titleSetting";
import FaviconSettings from "./faviconSetting";
import SideBarColorSettings from "./sideBarColorSetting";
import DateTimeSetting from "./dateTimeSetting";
import ThemeSetting from "./themeSetting";
import { Segment } from "semantic-ui-react";
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";
import {
  systemLogoChange,
  showOnDashboard,
  faviconChange
} from "./settingAction";

const mapStateToProps = state => ({
  data: state.lookAndFeelData.systemLogo,
  showOnDashboardData: state.lookAndFeelData.showOnDashboard,
  favicon: state.favicon.favicon
});

const actions = {
  systemLogoChange,
  showOnDashboard,
  faviconChange
};

class AllSetting extends Component {
  state = {};
  render() {
    // console.log("propsczv", this.props.favicon);
    return (
      <Fragment>
        <Grid direction="row" container>
          <Grid item xs={11} style={{ marginTop: "2%" }}>
            <Segment>
              <SystemSettings
                systemLogo={this.props.data}
                LogoChange={this.props.systemLogoChange}
              />
              <br />
              <TitleSettings
                showOnDashboard={this.props.showOnDashboardData}
                showOnDashboardEvent={this.props.showOnDashboard}
              />
              {/* <br />
              <FaviconSettings
                systemLogoFavicon={this.props.favicon}
                faviconChange={this.props.faviconChange}
              /> */}
              <br />
              <SideBarColorSettings />
              <br />
              <DateTimeSetting />
              <br />
              <ThemeSetting />
            </Segment>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default connect(mapStateToProps, actions)(AllSetting);
//
