import React from 'react'
import Model from '../../components/model/submitModel'
import Form from './addDefectStatus'

const SubmitModel =({handleOpen,handleClose,open,selectedID,upateDefectStatus})=>{
    return(
        <div>
            <Model handleOpen={handleOpen} handleClose={handleClose} open={open} form={<Form selectedID={selectedID} upateDefectStatus={upateDefectStatus} handleClose={handleClose} />}  />
        </div>
    )
}
export default SubmitModel
