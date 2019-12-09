import React from 'react';
import SubmitModel from './../../components/model/submitModel';

import Form from './FormDes';

const EditDesignation = ({ open, handleOpen, handleClose }) => {
    return (
        <div>

            <SubmitModel open={open} handleOpen={handleOpen} form={<Form />} handleClose={handleClose}  />

        </div>

        
    )
}
export default EditDesignation