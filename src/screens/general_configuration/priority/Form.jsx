<<<<<<< HEAD
import React from 'react';
import './Form.css';
import { ChromePicker } from 'react-color'; //color picker
import { SketchPicker } from 'react-color';

class Form extends React.Component {
  state = {
    priorityID: '',
    priorityName: '',
    priorityDescription: '',
=======
import React from "react";
import "./Form.css";

import Picker from "./Picker";
import { changeDataValues } from "./../../../fileAction/addCompanyEmployeeAction";

class Form extends React.Component {
  state = {
    // priorityID: "",
    name: "",
    description: "",
>>>>>>> pirathajini
    displayColorPicker: false,
    color: "",
    open: true,
<<<<<<< HEAD
    tempColor: '#22194D'
  };

  handleColor = e => {
    this.setState({
      selectedColor: (
        <span style={{ backgroundColor: e.hex, borderRadius: 20, width: 10 }}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
      )
    });

    this.setState({ tempColor: e.hex });
  };
=======
    tempColor: ""
  };

  handleColor = e => {};
>>>>>>> pirathajini

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };
<<<<<<< HEAD

=======
  handleChangeColor = color => {
    this.setState({
      color: color.hex,
      tempColor: (
        <span
          style={{
            backgroundColor: color.hex,
            borderRadius: 20,
            width: 10
          }}
        >
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
      )
    });
  };
>>>>>>> pirathajini
  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.priorityId) {
      this.props.updatePriority(this.state);
    } else {
      this.props.changeDataValues(this.state);
    }
  };

<<<<<<< HEAD
  render() {
    const { form } = this.props;

    const { displayColorPicker, tempColor } = this.state;
=======
  componentDidMount() {
    if (this.props.selectedData !== null) {
      this.setState({
        ...this.props.selectedData
      });
    }
  }
  componentWillReceiveProps() {
    setTimeout(
      function() {
        this.componentDidMount();
      }.bind(this),
      10
    );
  }

  render() {
    // const {
    //   form,
    // } = this.props;
    console.log(this.props);
    const { selectedColor, displayColorPicker } = this.state;
>>>>>>> pirathajini
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Name:</label>
          <input
<<<<<<< HEAD
            type='text'
            id=''
            className=''
            placeholder='Name'
            name='priorityName'
            value={this.state.priorityName}
=======
            type="text"
            id=""
            className=""
            placeholder="Name"
            name="name"
            value={this.state.name}
>>>>>>> pirathajini
            onChange={this.handleOnChange}
          ></input>
          <br />

          <label>Description:</label>
          <input
<<<<<<< HEAD
            type='text'
            id=''
            className=''
            placeholder='Description'
            name='priorityDescription'
            value={this.state.priorityDescription}
=======
            type="text"
            id=""
            className=""
            placeholder="Description"
            name="description"
            value={this.state.description}
>>>>>>> pirathajini
            onChange={this.handleOnChange}
          ></input>
          <br />

          <Picker
            handleChangeColor={this.handleChangeColor}
            color={this.state.color}
          />

          {/* <label>Colour:</label>
          <div
          
          >
            <div
              name='selectedColor'
              onClick={this.handleClick}
              style={{ backgroundColor: tempColor }}
              className='colorbox'
            ></div>
            <div onClick={this.handleClose} />
            {displayColorPicker && (
              <div>
                <SketchPicker onChange={this.handleColor} />
               
                 
              </div>
            )}
          </div> */}

          <div>
            <br />

            <button type='submit' onClick={this.props.openFormClose}>
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default Form;
