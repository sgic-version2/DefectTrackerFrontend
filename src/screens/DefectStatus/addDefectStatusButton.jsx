import React from "react";
import Forms from './addDefectStatus'
import Model from '../../components/model/submitModel'



  
const AddButton = ({ changeDataValuesStatus, handleOpen, handleClose, open ,test}) => {
  return (
    <div style={{marginBottom:40}}>
      <Model handleOpen={handleOpen} handleClose={handleClose} open={open}  form={<Forms changeDataValuesStatus={changeDataValuesStatus}handleClose={handleClose} test={test}/>} />
    </div>
  );
};

export default AddButton;