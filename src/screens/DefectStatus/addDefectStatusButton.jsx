import React, { useState } from "react";
import { Button } from "semantic-ui-react";


import AddDefectStatus from './addDefectStatus';

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
      <AddDefectStatus
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        changeDataValues={changeDataValues}
      />
      <Button onClick={handleOpen} color="primary">
        Add Defect Status
      </Button>
    </div>
  );
};

export default AddButton;
