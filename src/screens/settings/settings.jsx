import React, { Component, Fragment } from 'react';
import SystemSettings from './systemSetting';
import TitleSettings from './titleSetting';
import FaviconSettings from './faviconSetting';
import SideBarColorSettings from './sideBarColorSetting';
import DateTimeSetting from './dateTimeSetting';
import { Segment } from 'semantic-ui-react';
import { Grid } from '@material-ui/core';
class AllSetting extends Component {
    state = {}
    render() {
        return (
            <Fragment>
<<<<<<< HEAD
                <Grid direction="row" container>
                    <Grid item xs={11} style={{ marginTop: '2%' }}>
                        <Segment>
                            <SystemSettings />
                            <TitleSettings />
                            <FaviconSettings />
                            <SideBarColorSettings />
                            <DateTimeSetting />
                        </Segment>
                    </Grid>
                </Grid>
=======
                <SystemSettings/>
                <br/>
                <TitleSettings/>
                <br/>
                <FaviconSettings/>
                <br/>
                <SideBarColorSettings/>
                <br/>
                <DateTimeSetting/>
>>>>>>> voranzov
            </Fragment>
        );
    }
}

export default AllSetting;