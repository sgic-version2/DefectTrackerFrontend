import React from "react";
import "./Form.css";
import { SketchPicker } from "react-color";

class Form extends React.Component {
  state = {
    // anchorE1: null,
    priorityID: "",
    priorityName: "",
    priorityDescription: "",
    //priorityIcon: "",
    // selectedColor: "",
    displayColorPicker: false,
    selectedColor: null,
    open: true,
    tempColor: "#22194D"
  };

  handleColor = e => {
    this.setState({
      selectedColor: (
        <span style={{ backgroundColor: e.hex, borderRadius: 20, width: 10 }}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
      )
    });
    // console.log(e.hex);
    this.setState({ tempColor: e.hex });
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };
  // handleClose1 = () => {
  //   this.setState({ anchorE1: null });
  // };
  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.changeDataValues(this.state);
  };

  // handlexyz = e => {
  //   console.log("voz", e);
  // };

  render() {
    // const {
    //   form,
    //   open,
    //   handleOpen,
    //   handleClose,
    //   width,
    //   title,
    //   changeDataValues
    // } = this.props;
    const {  displayColorPicker, tempColor } = this.state;
    return (
      <div>
        {/* <Modal
          width={`${width ? width : "50"}%`}
          visible={open}
          title={title}
          onOk={handleOpen}
          onCancel={handleClose}
          footer={[
            <Button key="back" onClick={handleClose}>
              Return
            </Button>,
            <button  type="submit" onClick={handleClose}>
              Submit
            </button>
          ]}
        > */}

        <form onSubmit={this.handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            id=""
            className=""
            placeholder="Name"
            name="priorityName"
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
            name="priorityDescription"
            value={this.state.priorityDescription}
            onChange={this.handleOnChange}
          ></input>
          <br />

          <label>Colour:</label>
          <div>
            <div
              name="selectedColor"
              onClick={this.handleClick}
              style={{ backgroundColor: tempColor }}
              className="colorbox"
            ></div>
            <div onClick={this.handleClose} />
            {displayColorPicker && (
              <SketchPicker onChangeComplete={this.handleColor} />
            )}
          </div>

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
