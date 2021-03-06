import React, { Component } from "react";
import { Modal, Button } from "antd";
import { Icon, Form, Input, Radio, DatePicker } from "antd";
import { InputNumber } from "antd";
import moment from "moment";
import { Row, Col } from "antd";
const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];

const { TextArea } = Input;
//dropdown for Lisence period s Function
function onChange(value) {
  console.log("changed", value);
}

class AddProject extends Component {
  state = {
    project_id: "",
    project_name: "",
    type: "",
    duration: "",
    status: "",
    project_start_date: "",
    project_end_date: ""
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

  // handleOnChange = e => {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   });
  //   console.log(e.target.name);
  // };
  // handleSubmit = e => {
  //   e.preventDefault();
  //   this.props.changeDataValues(this.state);
  // };
  datePick = (date, dateString, e) => {
    // e.preventDefault()
    console.log("hfh", dateString);
    this.setState({
      license_start_date: dateString,
      license_end_date: dateString
    });
  };
  render() {
    console.log("hi"+this.state);
    const {
      form,
      open,
      handleOpen,
      handleClose,
      width,
      title,
      changeDataValues
    } = this.props;
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
             <Button key="submit" type="primary" onClick={()=>this.handleSubmit(handleClose)}>
             Submit
           </Button>
          ]}
        >
          <Form layout="vertical" >
            <Row>
              <Col span={12} style={{ padding: "5px" }}>
                <Form.Item label="Project Name">
                  <Input
                    value={this.state.project_name}
                    name="project_name"
                    placeholder="Project Name....."
                    onChange={this.handleOnChange}
                  />
                </Form.Item>{" "}
              </Col>

              <Col span={12} style={{ padding: "5px" }}>
                <Form.Item label="Project Type">
                  <Input
                    value={this.state.type}
                    name="type"
                    placeholder="Project Type...."
                    onChange={this.handleOnChange}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row></Row>
            <Row>
              <Col span={12} style={{ padding: "5px" }}>
                <Form.Item label="Project Duration">
                  <InputNumber
                    // value={this.state.license_period}
                    //  name="license_period"
                    // min={1}
                    // max={10}
                    // defaultValue={3}
                    onChange={onChange}
                    placeholder="In Years"
                    // onChange={this.handleOnChange}
                    style={{ width: "100%" }}
                  />{" "}
                </Form.Item>
              </Col>
              <Col span={12} style={{ padding: "5px" }}>
              <Form.Item label="Project Status">
                <Input
                  value={this.state.status}
                  name="status"
                  placeholder="status...."
                  onChange={this.handleOnChange}
                  style={{marginTop:'0px'}}
                />
              </Form.Item>
            </Col>
            </Row>
            <Row>
              <Col span={12} style={{ padding: "5px" }}>
                <Form.Item label="Start Date">
                  <DatePicker
                    defaultValue={moment("01/01/2015", dateFormatList[0])}
                    format={dateFormatList}
                    style={{ width: "100%" }}
                    name="project_start_date"
                    // value={this.state.license_start_date}
                    onChange={this.datePick}
                  />
                </Form.Item>
              </Col>

              <Col span={12} style={{ padding: "5px" }}>
                <Form.Item label="End Date">
                  <DatePicker
                    defaultValue={moment("01/01/2016", dateFormatList[0])}
                    format={dateFormatList}
                    style={{ width: "100%" }}
                    name="project_end_date"
                    // value={this.state.license_end_date}
                    onChange={this.datePick}
                  />
                </Form.Item>
              </Col>
            
            </Row>
          

            {/* <button type="submit" onClick={handleClose}>
              submit
            </button> */}
          </Form>
        </Modal>
      </div>
    );
  }
}

export default AddProject;
