import React from "react";
import "./Form.css";

import Picker from "./Picker";

class Form extends React.Component {
  state = {
    priorityID: "",
    name: "",
    description: "",
    displayColorPicker: false,
    color: "",
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
    // const {
    //   form,
    // } = this.props;

    const { selectedColor, displayColorPicker } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            id=""
            className=""
            placeholder="Name"
            name="name"
            value={this.state.name}
            onChange={this.handleOnChange}
          ></input>
          <br />

          <label>Description:</label>
          <input
            type="text"
            id=""
            className=""
            placeholder="Description"
            name="description"
            value={this.state.description}
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

            <button type="submit" onClick={this.props.openFormClose}>
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default Form;
