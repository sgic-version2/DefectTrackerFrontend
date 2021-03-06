import React from 'react'
import {Form, Input, Modal, Button } from 'antd';

const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8 },
  };

const AddModule = ({  open, handleOpen, handleClose, width}) => {
    //use state 
   

    return (
        <div>
            <Modal
                width={`${width?width:'50'}%`}
                centered
                visible={open}
                title="Add Module"
                onOk={handleOpen}
                onCancel={handleClose}
                footer={[
                    <Button key="back" onClick={handleClose}>
                        Return
            </Button>,
                    <Button key="submit" type="primary" onClick={handleClose}>
                        Submit
            </Button>,
                ]}
            >

                <  Form.Item {...formItemLayout} label="Module ID"  ><br/>
          <Input placeholder="Please input Module ID" style={{width:"500px"}} />
        </Form.Item>
        <Form.Item {...formItemLayout} label="Module Name"><br/>
          <Input placeholder="Please input Module Name" style={{width:"500px"}}/>
        </Form.Item>
            </Modal>
        </div>
    )
}
export default AddModule