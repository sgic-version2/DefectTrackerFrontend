import React, { useState } from "react";
import SubmitModel from "./../../../components/model/submitModel";
import Form from "./Form";
import { changeDataValues } from "./../../../fileAction/priorityConfigAction";

const AllocationButton = ({
  open,
  handleOpen,
  handleClose,
  changeDataValues
}) => {
  const [openForm, setOpen] = useState(true);
  // console.log("gfjgfj",open);
  return (
    <div>
       {openForm && <SubmitModel
          open={open}
          handleOpen={handleOpen}
          handleClose={handleClose}
          form={<Form changeDataValues={changeDataValues} openFormClose={handleClose} />}
          // onClick={()=>setOpen(false)}
        />}
    </div>
  );
};
export default AllocationButton;
