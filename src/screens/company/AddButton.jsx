import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import SubmitModel from "./AddCompany";

const AddButton = ({ changeDataValues }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <SubmitModel
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        changeDataValues={changeDataValues}
      />
      <Button onClick={handleOpen} color="primary">
        Add Company
      </Button>
    </div>
  );
};

export default AddButton;
