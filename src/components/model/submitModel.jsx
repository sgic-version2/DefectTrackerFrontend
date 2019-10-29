import React from 'react'
import { Modal, Button } from 'antd';
import {
    
    Icon,
    Form,
    Input,
    Radio,
    DatePicker
  } from "antd";
  import { InputNumber } from "antd";
  import moment from "moment";
  import { Row, Col } from "antd";
//   import "./company.css";
  const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];

  const { TextArea } = Input;
  //dropdown for Lisence period s Function
  function onChange(value) {
    console.log("changed", value);
  }

const SubmitModel = ({ form, open, handleOpen, handleClose, width, title }) => {
    //use state 


    return (
        <div>
            <Modal
                width={`${width?width:'50'}%`}
                visible={open}
                title={title}
                onOk={handleOpen}
                onCancel={handleClose}
                footer={[
                    <Button key="back" onClick={handleClose}>
                        Return
            </Button>,
                    <Button key="submit" type="primary" onClick={handleClose}>
                        Save
            </Button>,
                ]}
            >
                
                {form}
        </Modal>
        </div>
    )
}
export default SubmitModel