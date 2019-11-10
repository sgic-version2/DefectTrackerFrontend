import React, { Component, Fragment } from 'react';
import SystemSettings from './systemSetting';
import TitleSettings from './titleSetting';
import FaviconSettings from './faviconSetting';
import SideBarColorSettings from './sideBarColorSetting';
import DateTimeSetting from './dateTimeSetting';
class AllSetting extends Component {
    state = {  }
    render() { 
        return ( 
            <Fragment>
                <SystemSettings/>
                <TitleSettings/>
                <FaviconSettings/>
                <SideBarColorSettings/>
                <DateTimeSetting/>
            </Fragment>
         );
    }
}
 
export default AllSetting;