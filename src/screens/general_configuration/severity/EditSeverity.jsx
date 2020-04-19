import React from 'react';
import SubmitModel from '../../../components/model/submitModel';

import Form from './Form';

const EditPriority = ({ open, handleOpen, handleClose }) => {
    return (
        <div>
            <SubmitModel open={open} handleOpen={handleOpen} handleClose={handleClose} form={<Form />} />
        </div>
    )
}
export default EditPriority