import React from 'react'
import { Modal } from 'antd';
import {Button} from 'antd';



const SubmitModel = ({ form, open, handleClose, width, title }) => {
    //use state 


    return (
        <div>
            <Modal
                width={`${width ? width : '50'}%`}
                centered
                visible={open}
                title={title}
                onOk={handleClose}
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
                {form}
            </Modal>
        </div>
    )
}
export default SubmitModel