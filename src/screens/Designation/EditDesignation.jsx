import React from 'react';
import Model from './../../components/model/submitModel';

import Form from './FormDes';

const EditDesignation =({handleOpen,handleClose,open,selectedID,updateDesignation})=>{
    return(
        <div>
            <Model handleOpen={handleOpen} 
                handleClose={handleClose} 
                open={open} 
                form={
                    <Form selectedID={selectedID} 
                        updateDesignation={updateDesignation} 
                        handleClose={handleClose} 
                />}  
            />
        </div>
    )
}
export default EditDesignation