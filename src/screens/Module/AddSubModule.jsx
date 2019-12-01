import React from 'react'
import {Form, Input, Modal, Button } from 'antd';


const AddSubModule = ({ open1, handleOpen1, handleClose1, width}) => {
    //use state 
    const formItemLayout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 8 },
      };

    return (
        <div>
            <Modal
                width={`${width?width:'50'}%`}
                centered
                visible={open1}
                title="Add SubModule"
                onOk={handleOpen1}
                onCancel={handleClose1}
                footer={[
                    <Button key="back" onClick={handleClose1}>
                        Return
            </Button>,
                    <Button key="submit" type="primary" onClick={handleClose1}>
                        Submit
            </Button>,
                ]}
            >
                <  Form.Item {...formItemLayout} label="Module ID"  ><br/>
          <Input placeholder="Please input Module ID" style={{width:"500px"}} />
        </Form.Item>
        <Form.Item {...formItemLayout} label="SubModule Name"><br/>
          <Input placeholder="Please input SubModule Name" style={{width:"500px"}}/>
        </Form.Item>
            </Modal>
        </div>
    )
}
export default AddSubModule