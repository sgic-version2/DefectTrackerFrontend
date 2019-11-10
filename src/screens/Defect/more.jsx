import React from 'react'
import SubmitModel from "../../components/model/submitModel";
import FullView from './fullView';

const More = ({ open, handleOpen, handleClose }) => {
    return (
        <div style={{ marginBottom: 40 }}>
            <SubmitModel open={open} handleOpen={handleOpen} handleClose={handleClose} form={<FullView />} />
        </div>
    )
}
export default More
