import React, { Component, Fragment } from 'react';
import SystemSettings from './systemSetting';
import TitleSettings from './titleSetting';
import FaviconSettings from './faviconSetting';
import SideBarColorSettings from './sideBarColorSetting';
import DateTimeSetting from './dateTimeSetting';
<<<<<<< HEAD
import ThemeSetting from './themeSetting';
=======
import { Segment } from 'semantic-ui-react';
import { Grid } from '@material-ui/core';
>>>>>>> saseekalaraj
class AllSetting extends Component {
    state = {}
    render() {
        return (
            <Fragment>
<<<<<<< HEAD
                <SystemSettings/>
                <br/>
                <TitleSettings/>
                <br/>
                <FaviconSettings/>
                <br/>
                <SideBarColorSettings/>
                <br/>
                <DateTimeSetting/>
                <br/>
                <ThemeSetting/>
=======
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
>>>>>>> saseekalaraj
            </Fragment>
        );
    }
}

export default AllSetting;