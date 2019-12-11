
import SubmitModel from "./../../../components/model/submitModel";
import React, { useState } from "react";
import Form from "./Form";

const EditPriority = ({
  open,
  handleOpen,
  handleClose,
  updatePriority,
  selectedData
}) => {
  const[openForm]=useState(true);
  return (
    <div>
      {openForm &&(
      <SubmitModel
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        form={
          <Form 
          updatePriority={updatePriority} 
          selectedData={selectedData} 
          openFormClose={handleClose}
          />
        }
      
      />
      )}
    </div>
  );
};
export default EditPriority;
