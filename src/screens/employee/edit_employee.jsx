import React from 'react';
import Model from '../../components/model/submitModel'
import EditEmployeeForm from './edit_employee_form'


export default function EditEmployee ({open,handleOpen,handleClose,width,title}) {
  
  return (
    <div>
      <Model open={open} handleOpen={handleOpen} handleClose={handleClose} form={<EditEmployeeForm/>} width={width} title={title}/>
    </div>
  );
}
