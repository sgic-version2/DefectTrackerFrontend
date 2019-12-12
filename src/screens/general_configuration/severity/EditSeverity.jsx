import React,{useState} from "react";
import SubmitModel from "../../../components/model/submitModel";

import Form from "./Form";
import { updateServerity } from './../../../fileAction/severityConfigAction';

const EditServerity = ({ open, handleOpen, handleClose ,updateServerity,selectedData }) =>

{
    const[openForm]=useState(true);
  return (
    <div>'
        {openForm && (
      <SubmitModel
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        form={
        <Form
        updateServerity={updateServerity}
        selectedData={selectedData}
        openFormClose={handleClose}
        />}
      />
        )}
    </div>
  );
};
export default EditServerity;
