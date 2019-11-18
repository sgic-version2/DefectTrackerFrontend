import React, { Component, Fragment } from 'react';
import SystemSettings from './systemSetting';
import TitleSettings from './titleSetting';
import FaviconSettings from './faviconSetting';
import SideBarColorSettings from './sideBarColorSetting';
import DateTimeSetting from './dateTimeSetting';
import ThemeSetting from './themeSetting';
class AllSetting extends Component {
    state = {  }
    render() { 
        return ( 
            <Fragment>
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
            </Fragment>
         );
    }
}
 
export default AllSetting;