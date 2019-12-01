import React from 'react';
import './Form.css'
import { SketchPicker } from 'react-color' //color picker





class Form extends React.Component {
  state = {
    severityId:'',
    severityName: '',
    severityDiscription:'',
    selectedColor:null,
    open:true,
    
   // SeverityIcon:'',
    displayColorPicker: false,
    tempColor:"#22194D"
     
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
    this.setState({
      selectedColor: <span style ={{backgroundColor:e.hex, borderRadius:20, width:10}}>&nbsp; &nbsp; &nbsp;</span>
     
    });
    this.setState({tempColor:e.hex});
    console.log(e.hex)

  }

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false })
  };

  handleOnChange= e=>
  {
    this.setState({
      [e.target.name]: e.target.value
  })
  }

  render() {

  

    const { selectedColor, displayColorPicker,tempColor } = this.state;

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
          
        
          <br />
          <label>Colour:</label>
          <div>
            <div  name="selectedColor" onClick={this.handleClick} 
            style={{ backgroundColor: tempColor }}
             className='colorbox'></div>
            {/* {displayColorPicker ? <div style={ popover }> */}
            <div onClick={this.handleClose} />
            {/* </div> : null } */}
            {displayColorPicker && <SketchPicker onChangeComplete={this.handleColor} />}
          </div>
        </div>
        <br></br>
        <button type="submit" onClick={this.props.openFormClose}>submit</button>
        </form>
      </div>
    )
  }
}
export default Form;