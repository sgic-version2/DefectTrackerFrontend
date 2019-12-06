import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import { Form, Input } from 'antd';
import { Divider } from '@material-ui/core';

const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 }
};

class AddEmpolyee extends Component {
  state = {
    firstname: '',
    lastname: '',
    email: '',
    phone: ''
  };
  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(e.target.name);
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.employeeId) {
      this.props.updateEmployee(this.state);
    } else {
      this.props.changeDataValues(this.state);
    }
  };

  componentWillReceiveProps() {
    setTimeout(
      function() {
        this.componentDidMount();
      }.bind(this),
      10
    );
  }
  componentDidMount() {
    if (this.props.selectedData !== null) {
      this.setState({
        ...this.props.selectedData
      });
    }
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <p>Add Employee </p>
          <Divider></Divider>

          <Form.Item {...formItemLayout} label='First Name'>
            <Input
              value={this.state.firstname}
              name='firstname'
              placeholder='Please input firstname '
              onChange={this.handleOnChange}
            />
          </Form.Item>

          <Form.Item {...formItemLayout} label='Last Name'>
            <Input
              value={this.state.lastname}
              name='lastname'
              placeholder='Please input your lastname'
              onChange={this.handleOnChange}
            />
          </Form.Item>

          <Form.Item {...formItemLayout} label='Email'>
            <Input
              value={this.state.email}
              name='email'
              placeholder='Please input Email'
              onChange={this.handleOnChange}
            />
          </Form.Item>

          <Form.Item {...formItemLayout} label='Phone Number'>
            <Input
              value={this.state.phone}
              name='phone'
              placeholder='Please input Phone Number'
              onChange={this.handleOnChange}
            />
          </Form.Item>
          <button type='submit' onClick={this.props.handleClose}>
            submit
          </button>
        </Form>
      </div>
    );
  }
}

export default AddEmpolyee;
