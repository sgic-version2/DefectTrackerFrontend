import React from 'react'
import SubmitModel from '../../../components/model/submitModel';
import Form from './Form';


const AllocationButton = ({ open, handleOpen, handleClose ,changeDataValues }) => {
    return (
        <div>
            <SubmitModel open={open} handleOpen={handleOpen} handleClose={handleClose} form={<Form  changeDataValues={changeDataValues} />} />
        </div>
    )
}
export default AllocationButton
