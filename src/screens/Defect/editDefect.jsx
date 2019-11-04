import React from 'react'
import SubmitModel from '../../components/model/submitModel';
import Form from './form'


const EditDefect = ({ open, handleOpen, handleClose }) => {
    return (
        <div style={{ marginBottom: 40 }}>
            <SubmitModel open={open} handleOpen={handleOpen} handleClose={handleClose} form={<Form />} />
        </div>

    )
}

export default EditDefect
