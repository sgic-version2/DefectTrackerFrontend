import React from 'react';
import AddEmployee from './AddEmployee';
import Model from '../../components/model/submitModel';

export const EditForm = ({
  open,
  handleOpen,
  handleClose,
  updateEmployee,
  selectedData
}) => {
  return (
    <div>
      <Model
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        form={
          <AddEmployee
            updateEmployee={updateEmployee}
            handleClose={handleClose}
            selectedData={selectedData}
          />
        }
      />
    </div>
  );
};
export default EditForm;
