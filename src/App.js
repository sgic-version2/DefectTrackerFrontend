import React, { Fragment, Component } from 'react';
import './App.css';
import Container from './components/containers/container';
import AppBar from './components/topBar/appBar';
import 'antd/dist/antd.css';
import SideBar from './components/sideBar/SideBar';
import { Route } from 'react-router-dom'
import Login from './screens/Login/login'
import ForgetPassword from './screens/Login/forgotpass'
import * as theme from './components/themes/theme'
import { backgroundImage, darkOrLight } from './themesAction'
import { expandWithButton, expandWithOutButton } from './expandAction'
import { connect } from 'react-redux'


const mapStateProps = (state) => ({
  themesStatus: state.themesStatus.themesStatus,
  expandSideBarStatus: state.expandSideBarStatus.expandStatus,
  display:state.expandSideBarStatus.display,
  marginSize:state.expandSideBarStatus.marginSize,
  expandButtonStatus:state.expandSideBarStatus.expandButtonStatus,
  backgroundOrThemeStatus:state.expandSideBarStatus.backgroundOrThemeStatus,
  expandButtonStatus:state.expandSideBarStatus.expandButtonStatus,

})
const mapDispatchToProps = {
  backgroundImage,
  darkOrLight,
  expandWithButton,
  expandWithOutButton
}


class App extends Component {
  
  render() {
    const { backgroundImageOne, backgroundDrakColor, backgroundLightColor, backgroundLightColorBody, backgroundDrakColorBody } = theme.themes;
    const HandleChangeDarktheme=()=>{
      this.props.darkOrLight()
    }
    return (
      <Fragment>
        <Route exact path='/' component={Login} />
        <Route path="/forgetPassword" component={ForgetPassword} />
        <Route path='/defect(.+)' render={() => (
          <Fragment>
            <div style={{ background: this.props.themesStatus ? backgroundDrakColorBody : 'transparent', backgroundSize: 'cover', backgroundImage: !this.props.themesStatus ? `url(${backgroundImageOne})` : 'none' }}>
              <AppBar position='static' backgroundColor={backgroundDrakColor} iconFontColor='1a1f1e' marginSize={this.props.marginSize} appBarExpandIcon={this.props.expandWithButton} collapsed={this.props.expandButtonStatus} status={this.props.backgroundOrThemeStatus} changeDarktheme={HandleChangeDarktheme} />
              <SideBar collapsed={this.props.expandSideBarStatus} onMouseEnterSideBar={this.props.expandWithOutButton} display={this.props.display} sideBarColor={backgroundDrakColor} themesStatus={this.props.backgroundOrThemeStatus} />
              <Container textAlign="center" collapsed={this.props.expandSideBarStatus} />
            </div>
          </Fragment>
        )} />
      </Fragment>
    );
  }
}
export default connect(mapStateProps, mapDispatchToProps)(App);
