import React, { useState } from "react";
import { Button } from "semantic-ui-react";

import AddProject from "./AddProject";


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
      <AddProject
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        changeDataValues={changeDataValues}
      />
      <Button onClick={handleOpen} color="primary">
        Add Project
      </Button>
    </div>
  );
};

export default AddButton;
