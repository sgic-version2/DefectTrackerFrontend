import React, { useState } from "react";
import { Button } from "semantic-ui-react";

import AddRole from "./AddRole";

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
      <AddRole
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
