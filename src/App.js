import React, { Fragment, Component } from 'react';
import './App.css';
import Container from './components/containers/container';
import AppBar from './components/topBar/appBar';
import 'antd/dist/antd.css';
import SideBar from './components/sideBar/SideBar';

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
  render() {
    return (
      <Fragment >
        <AppBar position='static' backgroundColor='fff' iconFontColor='0f96ab' marginSize={this.state.marginSize} appBarExpandIcon={this.handleExpanedButton} collapsed={this.state.buttonClicked} />
        <SideBar collapsed={this.state.open} onMouseEnterSideBar={this.handleExpaned} display={this.state.display} sideBarColor='1e2129' />
        <Container textAlign="center" collapsed={this.state.open} />



      </Fragment>
    );
  }
}
export default App;
