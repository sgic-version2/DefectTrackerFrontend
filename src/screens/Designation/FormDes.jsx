import React from 'react';
// import './Form.css';

class FormDes extends React.Component {
  state = {
    designationID: '',
    designationName: '',
    open: true,
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
    const { Form } = this.props;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Name:</label>
          <input
            type='text'
            id=''
            className=''
            name='DesignationName'
            value={this.state.designationName}
            onChange={this.handleOnChange}
          ></input>
          <br />
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
export default FormDes;
