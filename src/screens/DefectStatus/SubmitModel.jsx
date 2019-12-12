import React from 'react'
import Model from '../../components/model/submitModel'
import Form from './addDefectStatus'

const SubmitModel =({handleOpen,handleClose,open,selectedID,upateDefectStatus,test})=>{
    return(
        <div>
            <Model handleOpen={handleOpen} handleClose={handleClose} open={open} form={<Form selectedID={selectedID} upateDefectStatus={upateDefectStatus} handleClose={handleClose} test={test} />}  />
        </div>
    )
}
export default SubmitModel
