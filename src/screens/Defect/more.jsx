import React, { useState } from 'react'
import SubmitModel from "../../components/model/submitModel";
import { Button } from 'semantic-ui-react';
import FullView from './fullView';

const More = ({open ,handleOpen, handleClose}) => {
    return (
        <div style={{marginBottom:40}}>
            <SubmitModel open={open}  handleOpen={handleOpen} handleClose={handleClose} form={<FullView/>}/>
                {/* <Button color="primary" onClick={handleOpen}>More</Button> */}
        </div>
    )
}

export default More
