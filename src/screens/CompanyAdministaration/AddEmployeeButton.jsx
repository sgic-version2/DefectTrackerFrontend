import React, { useState } from 'react';
import { Button } from 'semantic-ui-react';
import Model from '../../components/model/submitModel';
import AddEmployee from './AddEmployee';

const AddEmployeeButton = ({
  changeDataValues,
  open,
  handleClose,
  handleOpen
}) => {
  return (
    <div>
      <Model
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        form={
          <AddEmployee
            changeDataValues={changeDataValues}
            handleClose={handleClose}
          />
        }
      />

      <Button onClick={handleOpen} color='primary'>
        Add Emplyee
      </Button>
      <label for='embedpollfileinput' class='ui medium red left button'>
        <i class='ui upload icon'></i>
        Import Employee
      </label>
      <input
        type='file'
        class='inputfile'
        id='embedpollfileinput'
        style={{ display: 'none' }}
      />
    </div>
  );
};

export default AddEmployeeButton;
