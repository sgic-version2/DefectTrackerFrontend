import React from "react";
import "./Form.css";
import { SketchPicker } from "react-color";
import Button from "@material-ui/core/Button";
import { Divider, Dialog, DialogActions } from "@material-ui/core";
import Picker from "./Picker";
class Form extends React.Component {
  state = {
    severityID: "",
    severityName: "",
    severityDescription: "",
    displayColorPicker: false,
    selectedColor: "",
    open: true,
    tempColor: ""
  };

  handleColor = e => {};

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };
  handleChangeColor = color => {
    this.setState({
      selectedColor: color.hex,
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
  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.changeDataValues(this.state);
    console.log("test" + e);
  };

  render() {
    const { displayColorPicker, tempColor } = this.state;
    console.log("jj" + this.state);

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            id=""
            className=""
            placeholder="Name"
            name="severityName"
            value={this.state.priorityName}
            onChange={this.handleOnChange}
          ></input>
          <br />

          <label>Description:</label>
          <input
            type="text"
            id=""
            className=""
            placeholder="Description"
            name="severityDescription"
            value={this.state.priorityDescription}
            onChange={this.handleOnChange}
          ></input>
          <br />

         

          <Picker
            handleChangeColor={this.handleChangeColor}
            selectedColor={this.state.selectedColor}
          />

          {/* <label>Colour:</label>
          <div
          
          >
            <div
              name="selectedColor"
              onClick={this.handleClick}
              style={{ backgroundColor: tempColor }}
              className="colorbox"
            ></div>
            <div onClick={this.handleClose} />
            {displayColorPicker && (
              <div>
                <SketchPicker onChange={this.handleColor} />
               
                 
              </div>
            )}
          </div> */}

          {/* </form> */}
          <div>
            <br />

            <button color="primary" type="submit"  onClick={this.props.openFormClose}>
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default Form;
