import React, { Component } from "react";
import { Modal, Button } from "antd";
import { Form, Input } from "antd";
import { Divider } from "@material-ui/core";


const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 }
};

class AddEmpolyee extends Component {
  state = {
    username: "",
    firstname: "",
    middlename: "",
    lastname: "",
  };
  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(e.target.name);
  };

  handleSubmit = () => {
    this.props.changeDataValues(this.state);
  };

  render() {
    const { open, handleOpen, handleClose, width, title } = this.props;

    return (
      <div>

        <Modal
          width={`${width ? width : "50"}%`}
          visible={open}
          title={title}
          onOk={handleOpen}
          onCancel={handleClose}
          footer={[
            <Button key="back" onClick={handleClose}>
              Return
              </Button>,
            <Button key="submit" type="primary" onClick={() => this.handleSubmit(handleClose)}>
              Submit
              </Button>
          ]}
        >
          <Form>
            <p>Add Employee </p>
            <Divider></Divider>
            <Form.Item {...formItemLayout} label="User Name">
              <Input
                value={this.state.username}
                name="username"
                placeholder="Please input your username "
                onChange={this.handleOnChange}
              />
            </Form.Item>
            <Form.Item {...formItemLayout} label="First Name">
              <Input
                value={this.state.firstname}
                name="firstname"
                placeholder="Please input firstname "
                onChange={this.handleOnChange}
              />
            </Form.Item>
            <Form.Item {...formItemLayout} label="Middle Name">
              <Input
                value={this.state.middlename}
                name="middlename"
                placeholder="Please input middlename"
                onChange={this.handleOnChange}
              />
            </Form.Item>
            <Form.Item {...formItemLayout} label="Last Name">
              <Input
                value={this.state.lastname}
                name="lastname"
                placeholder="Please input your lastname"
                onChange={this.handleOnChange}
              />
            </Form.Item>
            {/* <button type="submit" onClick={handleClose}>
                submit
              </button> */}
          </Form>
        </Modal>

      </div>
    );
  }
}

export default AddEmpolyee;
