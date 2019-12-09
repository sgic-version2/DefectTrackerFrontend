import React from 'react';
import './Form.css';
import { ChromePicker } from 'react-color'; //color picker
import { SketchPicker } from 'react-color';

class Form extends React.Component {
  state = {
    priorityID: '',
    priorityName: '',
    priorityDescription: '',
    displayColorPicker: false,
    selectedColor: null,
    open: true,
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

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.changeDataValues(this.state);
  };

  render() {
    const { form } = this.props;

    const { displayColorPicker, tempColor } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Name:</label>
          <input
            type='text'
            id=''
            className=''
            placeholder='Name'
            name='priorityName'
            value={this.state.priorityName}
            onChange={this.handleOnChange}
          ></input>
          <br />

          <label>Description:</label>
          <input
            type='text'
            id=''
            className=''
            placeholder='Description'
            name='priorityDescription'
            value={this.state.priorityDescription}
            onChange={this.handleOnChange}
          ></input>
          <br />

          <label>Colour:</label>
          <div>
            <div
              name='selectedColor'
              onClick={this.handleClick}
              style={{ backgroundColor: tempColor }}
              className='colorbox'
            ></div>
            <div onClick={this.handleClose} />
            {displayColorPicker && (
              <SketchPicker onChangeComplete={this.handleColor} />
            )}
          </div>

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
