import React, { Component } from "react";
import { Modal, Button } from "antd";
import { Form, Input, DatePicker } from "antd";
import { InputNumber } from "antd";
import moment from "moment";
import { Row, Col } from "antd";
const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];


//dropdown for Lisence period s Function
function onChange(value) {
  
}

class AddProject extends Component {
  state = {
    project_name: "",
    project_type: "",
    duration: "",
    status: "",
    start_date: "",
    end_date: ""
  };
  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
     e.preventDefault();
    if (this.state.project_id) {
        this.props.upateProject(this.state)
    } else {
      this.props.changeDataValues(this.state);
    }
    console.log("jjjjjjjjj",this.props.changeDataValues);
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
    if (this.props.selectedID !== null) {
      this.setState({
        ...this.props.selectedID
      });
    }
  }

  datePick = (date, dateString, e) => {
    // e.preventDefault()
    // console.log("hfh", dateString);
    this.setState({
      license_start_date: dateString,
      license_end_date: dateString
    });
  };
  render() {
    // console.log("hi"+this.state);
    const {
      handleClose,
    } = this.props;
  
    
    return (
      <div>
      
          <Form layout="vertical" onSubmit={this.handleSubmit} >
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
                    value={this.state.project_type}
                    name="project_type"
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
                <Form.Item label="start_date">
                  <DatePicker
                    defaultValue={moment("01/01/2015", dateFormatList[0])}
                    format={dateFormatList}
                    style={{ width: "100%" }}
                    name="start_date"
                    // value={this.state.start_date}
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
                    name="end_date"
                    //  value={this.state.end_date}
                    onChange={this.datePick}
                  />
                </Form.Item>
              </Col>
            
            </Row>
          

            <button type="submit" onClick={handleClose}>
              submit
            </button>
          </Form>
      </div>
    );
  }
}

export default AddProject;
