import React from 'react';
import Model from '../../components/model/submitModel'
import '../employee/employee_details.css'
import AddEmployeeForm from './add_employee_form'

export default function TransitionsModal({ open, handleOpen, handleClose, width, title, changeDataValues }) {
  return (
    <div>
      <Model open={open} handleOpen={handleOpen} handleClose={handleClose} form={<AddEmployeeForm changeDataValues={changeDataValues} />} width={width} title={title} />
    </div>
  );
}
