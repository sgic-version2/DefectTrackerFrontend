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

class AddCompany extends Component {
  state = {
    companyID: "",
    companyName: "",
    abbreviation: "",
    company_description: "",
    reg_no: "",
    admin_name: "",
    admin_email: "",
    license_type_id: "",
    license_period: "",
    license_type_name: "",
    license_start_date: "",
    license_end_date: ""
  };
  
  handleOnChange=(e)=>{
    this.setState({
      [e.target.name]: e.target.value
  })
  console.log(e.target.name)
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.changeDataValues(this.state)
}
datePick =(date, dateString, e)=>{
  // e.preventDefault()
  console.log( "hfh" ,dateString);
    this.setState({ license_start_date:dateString  ,license_end_date:dateString  });

}
  render() {
    console.log(this.state);
    const {
      
      open,
      handleOpen,
      handleClose,
      width,
      title,
      
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
            <button  type="submit" onClick={handleClose}>
              Submit
            </button>
          ]}
        >
          <Form layout="vertical" onSubmit={this.handleSubmit} >
            <Row>
              <Col span={12} style={{ padding: "5px" }}>
                <Form.Item label="Company Name">
                  <Input
                   value={this.state.companyName} name="companyName"
                    placeholder="eg: Samuel Gnanam IT Centre" onChange={this.handleOnChange}
                  />
                </Form.Item>{" "}
              </Col>

              <Col span={12} style={{ padding: "5px" }}>
                <Form.Item label="Abbreviation">
                  <Input value={this.state.abbreviation} name="abbreviation" placeholder="eg: SGIC" onChange={this.handleOnChange}/>
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={12} style={{ padding: "5px" }}>
                <Form.Item label="Reg NO">
                  <Input  value={this.state.reg_no} name="reg_no"  placeholder="Registration Number" onChange={this.handleOnChange}/>
                </Form.Item>
              </Col>

              <Col span={12} style={{ padding: "5px" }}>
                <Form.Item label="Admin Name">
                  <Input value={this.state.admin_name} name="admin_name" placeholder="IT Administrator" onChange={this.handleOnChange} />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={9} style={{ padding: "5px" }}>
                <Form.Item label="License Period">
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

              <Col span={15} style={{ padding: "5px" }}>
                <Form.Item
                  label="Lisence Type"
                  className="collection-create-form_last-form-item"
                  onChange={this.handleOnChange}
                >
                  <Radio.Group>
                    <Radio value="basic">Basic</Radio>
                    <Radio value="medium">Medium</Radio>
                    <Radio value="advanced">Advanced</Radio>
                    <Radio value="customized">Customized</Radio>
                  </Radio.Group>
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
                    name="license_start_date"
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
                    name="license_end_date"
                    // value={this.state.license_end_date}
                    onChange={this.datePick}

                  />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item label="E-mail">
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="samuelgnanamitcentre@gmail.com"
                style={{ width: "50%" }}
                value={this.state.admin_email}
                name="admin_email"
                onChange={this.handleOnChange}
              />
            </Form.Item>
            <Form.Item label="Description">
              <TextArea value={this.state.company_description}
                name="company_description" rows={3} placeholder="company description" onChange={this.handleOnChange}/>
            </Form.Item>
            <button type="submit" onClick={handleClose}>submit</button>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default AddCompany;
