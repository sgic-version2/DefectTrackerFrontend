import React, { Component } from "react";
import { Row, Col } from "antd";
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
 
    name: "",
   
    description: "",
    formOpen: true
  };
  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
     e.preventDefault();
    if (this.state.typeId) {
        this.props.upateDefectType(this.state)
    } else {
      this.props.changeDataValuesType(this.state);
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
    if (this.props.selectedID !== null) {
      this.setState({
        ...this.props.selectedID
      });
    }
  }

  
  render() {
  const {
      handleClose,
    } = this.props  
    console.log("method form",this.props);
    
    return (
      <div>
      
          <form layout="vertical" onSubmit={this.handleSubmit} >
          <p>Add Defect Type</p>
              <Divider></Divider>
              <Row>
              <Col span={12} style={{ padding: "5px" }}>
                <Form.Item label="TypeName">
                  <Input
                    value={this.state.name}
                    name="name"
                    placeholder="Type Name....."
                    onChange={this.handleOnChange}
                  />
                </Form.Item>{" "}
              </Col>

              
            </Row>
            <Row></Row>
            <Row>
            <Col span={20} style={{ padding: "5px" }}>
                <Form.Item label="Description ">
                  <TextArea
                    value={this.state.description}
                    name="description"
                    placeholder="Description...."
                    onChange={this.handleOnChange}
                  />
                </Form.Item>
              </Col>
              </Row>
          

            <button type="submit" onClick={handleClose}>
              submit
            </button>
          </form>
      </div>
    );
  }
}

export default AddDefectStatus;