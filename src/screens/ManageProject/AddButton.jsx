import React, { useState } from 'react'
import { Button } from 'semantic-ui-react'
// import PopUp from './PopUp'
import SubmitModel from '../../components/model/submitModel';
import Form from './Form'


const AddButton = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }


    return (
        <div style={{ marginBottom: 40 }}>
            <SubmitModel open={open} handleOpen={handleOpen} handleClose={handleClose} form={<Form />} />
            <Button color="primary" onClick={() => handleOpen()}>Add Project</Button>
        </div>
    )
}

export default AddButton