import React from 'react'
import { Modal, Button } from 'antd';

import { Divider } from '@material-ui/core';
import Model from '../../../components/model/submitModel'
import Forms from "./AddDefectType"

const SubmitModel =({handleOpen,handleClose,open,selectedID,upateDefectType})=>{
    return(
        <div>
            <Model handleOpen={handleOpen} handleClose={handleClose} open={open} form={<Forms selectedID={selectedID} upateDefectType={upateDefectType} handleClose={handleClose}  />}  />
        </div>
    )
}
export default SubmitModel