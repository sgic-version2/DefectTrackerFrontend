import React from 'react';
import './Form.css'
import { ChromePicker } from 'react-color' //color picker





class Form extends React.Component {
  state = {
    displayColorPicker: false,
    selectedColor: null
  };

  handleColor = (e) => {
    this.setState({ selectedColor: e.hex });
    console.log(e.hex)
  }

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false })
  };

  render() {

    const { selectedColor, displayColorPicker } = this.state;

    return (
      <div>
        <div >
          <label>Name:</label>
          <input type="text" id="" className="" placeholder="Name"></input>
          <br />
          <label>Description:</label>
          <input type="text" id="" className="" placeholder="Description"></input>
          <br />
          <label>Icon:</label>
          <br />
          <br />
          <input
            accept="image/*"
            //className={classes.input}
            id="contained-button-file"
            multiple
            type="file"
          />
          <br />
          <br />
          <label>Colour:</label>
          <div>
            <div onClick={this.handleClick} style={{ backgroundColor: selectedColor }} className='colorbox'></div>
            {/* {displayColorPicker ? <div style={ popover }> */}
            <div onClick={this.handleClose} />
            {/* </div> : null } */}
            {displayColorPicker && <ChromePicker onChange={this.handleColor} />}
          </div>
        </div>
      </div>
    )
  }
}
export default Form