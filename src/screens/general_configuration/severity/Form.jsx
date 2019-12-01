import React from 'react';
import './Form.css'
import { ChromePicker } from 'react-color' //color picker





class Form extends React.Component {
  state = {
    severityId:'',
    severityName: '',
    severityDiscription:'',
    SeverityColor:'',
   // SeverityIcon:'',
    displayColorPicker: false,
     
  };
  handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
}
handleSubmit = (e) => {
    e.preventDefault()
    this.props.changeDataValues(this.state)
}

  
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

    console.log("hh"+this.state)

    const { selectedColor, displayColorPicker } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <div >
          <label>Name:</label>
          <input type="text" id="" className="" name="severityName" value={this.state.severityName} placeholder="Name" onChange={this.handleChange}></input>
          <br />
          <label>Description:</label>
          <input type="text" id="" className=""  name="severityDiscription" value={this.state.severityDiscription}placeholder="Description"onChange={this.handleChange}></input>
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
        <br></br>
        <button type="submit" onClick={this.handleClose}>submit</button>
        </form>
      </div>
    )
  }
}
export default Form