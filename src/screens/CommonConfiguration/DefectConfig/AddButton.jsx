import React from "react";
import Forms from "./AddDefectType"

import Model from '../../../components/model/submitModel'



  
const AddButton = ({ changeDataValuesType, handleOpen, handleClose, open }) => {
  return (
    <div style={{marginBottom:40}}>
      <Model handleOpen={handleOpen} handleClose={handleClose} open={open}  form={<Forms changeDataValuesType={changeDataValuesType}handleClose={handleClose}/>} />
    </div>
  );
};

export default AddButton;
