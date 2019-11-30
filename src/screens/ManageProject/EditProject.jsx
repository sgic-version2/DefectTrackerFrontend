import React from "react";
import { Modal, Button } from "antd";
import { Form, Input } from "antd";
import { Divider } from "@material-ui/core";

const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 }
};

const EditDefectType = ({
  form,
  open,
  handleOpen,
  handleClose,
  width,
  title
}) => {
  //use state

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
          <Button key="submit" type="primary" onClick={handleClose}>
            Submit
          </Button>
        ]}
      >
        <Form>
          <p>Add Defect Type</p>
          <Divider></Divider>
          <Form.Item {...formItemLayout} label="Type Name">
            <Input placeholder="Please input Defect Type " />
          </Form.Item>
          <Form.Item {...formItemLayout} label="Description">
            <Input placeholder="Please input Description" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
export default EditDefectType;
