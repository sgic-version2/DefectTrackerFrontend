import React from "react";
import Forms from './AddProject'
import Model from '../../components/model/submitModel'


const AddButton = ({ postProject, handleOpen, handleClose, open }) => {
  return (
    <div style={{marginBottom:40}}>
      <Model handleOpen={handleOpen} handleClose={handleClose} open={open} form={<Forms postProject={postProject}handleClose={handleClose}/>} />
    </div>
  );
};

export default AddButton;
