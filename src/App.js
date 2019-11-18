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
const InitialmarginSize = 80
const ExpandmarginSize = 250
class App extends Component {
  state = {
    open: true,
    marginSize: InitialmarginSize,
    buttonClicked: false,
    display: 'none'
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

  changeDarktheme=()=>{
    console.log("hello from the other side")
  }
  render() {
    const { backgroundImageOne , backgroundDrakColor, backgroundLightColor } = theme.themes;
    console.log(backgroundDrakColor);
    return (
      <Fragment>
        <Route exact path='/' component={Login} />
        <Route path="/forgetPassword" component={ForgetPassword} />
        <Route path='/defect(.+)' render={() => (
          <Fragment>
            <div style={{ backgroundImage: `url(${backgroundImageOne})`, backgroundSize: 'cover' }}>
            {/* <div style={{ backgroundColor: backgroundDrakColor}}> */}
              <AppBar position='static' backgroundColor='transparent' iconFontColor='1a1f1e' marginSize={this.state.marginSize} appBarExpandIcon={this.handleExpanedButton} collapsed={this.state.buttonClicked} changeDarktheme={this.changeDarktheme} />
              <SideBar collapsed={this.state.open} onMouseEnterSideBar={this.handleExpaned} display={this.state.display} sideBarColor='transparent' />
              <Container textAlign="center" collapsed={this.state.open} />
            </div>
          </Fragment>
        )} />
      </Fragment>
    );
  }
}
export default App;
