import React from 'react'
import Model from '../../components/model/submitModel'
import Form from './AddProject'

const SubmitModel =({handleOpen,handleClose,open,selectedID,upateProject})=>{
    return(
        <div>
            <Model handleOpen={handleOpen} handleClose={handleClose} open={open} form={<Form selectedID={selectedID} upateProject={upateProject} handleClose={handleClose} />}  />
        </div>
    )
}
export default SubmitModel
