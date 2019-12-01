import React, { Component } from "react";
import { Modal, Button } from "antd";
import { Form, Input } from "antd";
import { Divider } from "@material-ui/core";

const { TextArea } = Input;
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 }
};

class AddDefectStatus extends Component {
  state = {
    statusId: "1",
    statusName: "",
    defectValue: "",
    description: "",
    formOpen: true
  };
  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(e.target.name);
  };
  handleSubmit = e => {
    // e.preventDefault();
    this.props.changeDataValues(this.state);
    // this.setState({ formOpen: !this.state.formOpen });
    console.log(e)
    e();

  };
  render() {
    const {  open, handleOpen, handleClose, width, title } = this.props;

    return (
      <div>
        {this.state.formOpen && (
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
              <Button key="submit" type="primary" onClick={()=>this.handleSubmit(handleClose)}>
                Submit
              </Button>
            ]}
          >
            <Form>
              <p>Add Defect Status</p>
              <Divider></Divider>
              <Form.Item {...formItemLayout} label="Defect Status">
                <Input
                  value={this.state.name}
                  name="statusname"
                  placeholder="Please input Defect Status "
                  onChange={this.handleOnChange}
                />
              </Form.Item>
              <Form.Item {...formItemLayout} label="Defect Value">
                <Input
                  value={this.state.defectValue}
                  name="defectValue"
                  placeholder="Please input Defect Status value "
                  onChange={this.handleOnChange}
                />
              </Form.Item>
              <Form.Item {...formItemLayout} label="Description">
                <TextArea
                  value={this.state.description}
                  name="description"
                  placeholder="Please input Description"
                  onChange={this.handleOnChange}
                />
              </Form.Item>
              {/* <button type="submit" onClick={handleClose}>
                submit
              </button> */}
            </Form>
          </Modal>
        )}
      </div>
    );
  }
}

export default AddDefectStatus;
