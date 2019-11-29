import React, { useState } from 'react'
import { Button } from 'semantic-ui-react'
import SubmitModel from '../../components/model/submitModel'
import EditForm from './EditForm';


const AllocationButton = (changeDataValues) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div style={{ marginBottom: 40 }}>
      <SubmitModel form={<EditForm />} open={open} handleOpen={handleOpen} handleClose={handleClose}  />
      <Button color="primary" onClick={handleOpen} changeDataValues={changeDataValues} >Add Employee</Button>
      <label for="embedpollfileinput" class="ui medium red left button">
        <i class="ui upload icon"></i>
        Import Employee
  </label>
      <input type="file" class="inputfile" id="embedpollfileinput" style={{ display: "none" }} />
      {/* <Button color="red">Import</Button> */}
      {/* <Input class="ui button active"  color="red"/><i class="upload icon" type="file"></i>  */}
      {/* <Button primary>Module Allocation</Button> */}
      <div class="ui middle aligned center aligned grid container">

      </div>
    </div>
  )
}

export default AllocationButton

