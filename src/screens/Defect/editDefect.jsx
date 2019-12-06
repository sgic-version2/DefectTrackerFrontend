import React from 'react'
import SubmitModel from '../../components/model/submitModel';
import EditForm from './editForm'


const EditDefect = ({ open, handleOpen, handleClose,selectedData }) => {
    return (
        <div style={{ marginBottom: 40 }}>
            <SubmitModel open={open} handleOpen={handleOpen} handleClose={handleClose} form={<EditForm selectedData={selectedData} />} />
        </div>

    )
}

export default EditDefect
