import React from 'react';
import Model from './../../components/model/submitModel';

import Form from './Form';

const SubmitModel =({handleOpen,handleClose,open,selectedID,updateRole})=>{
    return(
        <div>
            <Model handleOpen={handleOpen} handleClose={handleClose} open={open} form={<Form selectedID={selectedID} updateRole={updateRole} handleClose={handleClose} />}  />
        </div>
    )
}
export default SubmitModel