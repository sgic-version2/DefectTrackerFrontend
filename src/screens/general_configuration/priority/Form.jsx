import React from "react";
import "./Form.css";
import { ChromePicker } from "react-color"; //color picker
class Form extends React.Component {
  state = {
    anchorE1: null,
    priorityID: "",
    priorityName: "",
    priorityDescription: "",
    //priorityIcon: "",
    selectedColor: "",
    displayColorPicker: false,
    selectedColor: null,
    open:true,
  };

  handleColor = e => {
    this.setState({ selectedColor: e.hex });
    console.log(e.hex);
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };
  handleClose1 = () => {
    this.setState({ anchorE1: null });
  };
  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.changeDataValues(this.state);
    console.log("vorannsd", this.props.openFormClose);
  };

  render() {
   console.log ("haiii"+this.state)
    const {
      form,
    } = this.props;
    console.log("hh" + this.state);
    const { selectedColor, displayColorPicker } = this.state;
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
              style={{ backgroundColor: selectedColor }}
              className="colorbox"
            ></div>
            <div onClick={this.handleClose} />
            {displayColorPicker && <ChromePicker onChange={this.handleColor} />}
          </div>

          {/* </form> */}
          <div>
            <br />
         
            <button  type="submit"  onClick={this.props.openFormClose} >
              Submit
            </button>
              </div>
        </form>
      
      </div>
    );
  }
}
export default Form;
