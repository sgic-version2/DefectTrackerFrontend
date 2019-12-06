import React, { useState } from "react";
import Form from './AddProject'
import Model from '../../components/model/submitModel'


const AddButton = ({ postProject, handleOpen, handleClose, open }) => {
  
  return (
    <div style={{marginBottom:40}}>
      <Model handleOpen={handleOpen} handleClose={handleClose} open={open} form={<Form postProject={postProject} />} />
    </div>
  );
};

export default AddButton;
