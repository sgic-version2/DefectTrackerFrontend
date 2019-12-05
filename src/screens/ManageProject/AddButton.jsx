import React, { useState } from "react";
import Form from './AddProject'
import Model from '../../components/model/submitModel'


const AddButton = ({ changeDataValues, handleOpen, handleClose, open }) => {
  
  return (
    <div>
      <Model handleOpen={handleOpen} handleClose={handleClose} open={open} form={<Form changeDataValues={changeDataValues} />} />
    </div>
  );
};

export default AddButton;
