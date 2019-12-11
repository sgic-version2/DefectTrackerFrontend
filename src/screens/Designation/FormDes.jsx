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

class FormDes extends Component{
  state = {
    designationName: '',
    formOpen: true
  };

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
     e.preventDefault();
    if (this.state.designationId) {
        this.props.updateDesignation(this.state)
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
          <p>Add Designation</p>
              <Divider></Divider>
              <Row>
              <Col span={12} style={{ padding: "5px" }}>
                <Form.Item label="Status Name">
                  <Input
                    value={this.state.designationName}
                    name="designationName"
                    placeholder="Status Name....."
                    onChange={this.handleOnChange}
                  />
                </Form.Item>{" "}
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
export default FormDes;
