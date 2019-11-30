import React, { useState } from "react";
import { Button } from "semantic-ui-react";

import AddEmployee from './AddEmployee'


const AddEmployeeButton = ({ changeDataValues }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <AddEmployee
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        changeDataValues={changeDataValues}
      />
      <Button onClick={handleOpen} color="primary">
        Add Emplyee
      </Button>
      <label for="embedpollfileinput" class="ui medium red left button">
        <i class="ui upload icon"></i>
        Import Employee
  </label>
      <input type="file" class="inputfile" id="embedpollfileinput" style={{ display: "none" }} />
    
   
    </div>
  );
};

export default AddEmployeeButton;
