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
import { connect } from 'react-redux'
const InitialmarginSize = 80
const ExpandmarginSize = 250

const mapStateProps = (state) => ({
  themesStatus: state.themesStatus.themesStatus
})
const mapDispatchToProps = {
  backgroundImage,
  darkOrLight
}
class App extends Component {
  state = {
    open: true,
    marginSize: InitialmarginSize,
    buttonClicked: false,
    display: 'none',
    contentStatus: false,
    status: true,
  }
  handleExpanedButton = () => {
    this.setState({
      open: !this.state.open,
      buttonClicked: !this.state.buttonClicked,
    })
    if (this.state.marginSize === InitialmarginSize) {
      this.setState({
        marginSize: ExpandmarginSize,
        display: 'block'
      })
    } else {
      this.setState({
        marginSize: InitialmarginSize,
        display: 'none'
      })
    }
  }
  handleExpaned = () => {
    if (!this.state.buttonClicked) {
      this.setState({
        open: !this.state.open
      })
      if (this.state.open === true && this.state.status === false) {
        this.setState({
          contentStatus: false
        })
      } else if (this.state.open === false && this.state.status === false) {
        this.setState({
          contentStatus: true
        })
      } else if (this.state.open === false && this.state.status === true) {
        this.setState({
          contentStatus: false
        })
      } else if (this.state.open === true && this.state.status === true) {
        this.setState({
          contentStatus: false
        })
      }
      if (this.state.marginSize === InitialmarginSize) {
        this.setState({
          marginSize: ExpandmarginSize,
          display: 'block'
        })
      } else {
        this.setState({
          marginSize: InitialmarginSize,
          display: 'none'
        })
      }
    }

  }
  render() {
    console.log(this.props);

    const { backgroundImageOne, backgroundDrakColor, backgroundLightColor, backgroundLightColorBody, backgroundDrakColorBody } = theme.themes;
    const { status, contentStatus } = this.state
    return (
      <Fragment>
        <Route exact path='/' component={Login} />
        <Route path="/forgetPassword" component={ForgetPassword} />
        <Route path='/defect(.+)' render={() => (
          <Fragment>
            <div style={{ background: status ? backgroundDrakColorBody : 'transparent', backgroundSize: 'cover', backgroundImage: !status ? `url(${backgroundImageOne})` : 'none' }}>
              <AppBar position='static' backgroundColor={backgroundDrakColor} iconFontColor='1a1f1e' marginSize={this.state.marginSize} appBarExpandIcon={this.handleExpanedButton} collapsed={this.state.buttonClicked} status={contentStatus} />
              <SideBar collapsed={this.state.open} onMouseEnterSideBar={this.handleExpaned} display={this.state.display} sideBarColor={backgroundDrakColor} themesStatus={this.props.themesStatus}/>
              <Container textAlign="center" collapsed={this.state.open} />
            </div>
          </Fragment>
        )} />
      </Fragment>
    );
  }
}
export default connect(mapStateProps, mapDispatchToProps)(App);
