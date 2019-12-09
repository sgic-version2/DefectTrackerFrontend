import React from "react";
import SubmitModel from "./../../components/model/submitModel";
import Form from "./Form";






  
const AddButton = ({ open,
  handleOpen,
  handleClose,
  changeDataValues }) => {
  return (
    <div style={{marginBottom:40}}>
      <SubmitModel handleOpen={handleOpen} handleClose={handleClose} open={open} form={<Form changeDataValues={changeDataValues}handleClose={handleClose}/>} />
    </div>
  );
};

export default AddButton;