

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
    if (this.state.statusId) {
        this.props.upateDefectStatus(this.state)
    } else {
      this.props.changeDataValuesStatus(this.state);
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
          <p>Add Defect Status</p>
              <Divider></Divider>
<<<<<<< HEAD
              <Form.Item {...formItemLayout} label="Defect Status">
                <Input
                  value={this.state.statusName}
                  name="statusName"
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
=======
              <Row>
              <Col span={12} style={{ padding: "5px" }}>
                <Form.Item label="Status Name">
                  <Input
                    value={this.state.name}
                    name="name"
                    placeholder="Status Name....."
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
>>>>>>> jeyaamuthan
      </div>
    );
  }
}

export default AddDefectStatus;
