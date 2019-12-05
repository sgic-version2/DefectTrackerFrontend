import React, { useState } from "react";
import { Button } from "semantic-ui-react";

import AddDefectType from "./AddDefectType";

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
      <AddDefectType
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        changeDataValues={changeDataValues}
      />
      <Button onClick={handleOpen} color="primary">
        Add DefectType
      </Button>
    </div>
  );
};

export default AddButton;
