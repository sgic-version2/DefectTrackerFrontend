import React from 'react'
import { Modal } from 'antd';


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
            >
                {form}
            </Modal>
        </div>
    )
}
export default SubmitModel