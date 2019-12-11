import React, { useState } from 'react'
import SubmitModel from '../../../components/model/submitModel';
import Form from './Form';


const AllocationButton = ({ 
    open, 
    handleOpen,
     handleClose ,
     changeDataValues 
    }) => {
        const[openForm,setOpen]=useState(true);
    return (
        <div>
           {openForm && <SubmitModel 
           open={open}
            handleOpen={handleOpen}
             handleClose={handleClose} 
             form={<Form  changeDataValues={changeDataValues} openFormClose={handleClose} />}
              />}
        </div>
    )
}
export default AllocationButton
