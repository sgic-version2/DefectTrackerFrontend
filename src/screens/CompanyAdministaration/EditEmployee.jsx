import React from 'react';
import { Modal, Button } from 'antd';
import { Form, Input } from 'antd';
import { Divider } from '@material-ui/core';

const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 }
};

const EditEmployee = ({ open, handleOpen, handleClose, width, title }) => {
  //use state

  return (
    <div>
      <Modal
        width={`${width ? width : '50'}%`}
        visible={open}
        title={title}
        onOk={handleOpen}
        onCancel={handleClose}
        footer={[
          <Button key='back' onClick={handleClose}>
            Return
          </Button>,
          <Button key='submit' type='primary' onClick={handleClose}>
            Submit
          </Button>
        ]}
      >
        <Form>
          <p>Add Employee</p>
          <Divider></Divider>
          <Form.Item {...formItemLayout} label='username'>
            <Input placeholder='Please input your username ' />
          </Form.Item>
          <Form.Item {...formItemLayout} label='firstname'>
            <Input placeholder='Please input your firstname' />
          </Form.Item>
          <Form.Item {...formItemLayout} label='middlename'>
            <Input placeholder='Please input your middlename' />
          </Form.Item>
          <Form.Item {...formItemLayout} label='lastname'>
            <Input placeholder='Please input your lastname' />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
export default EditEmployee;
