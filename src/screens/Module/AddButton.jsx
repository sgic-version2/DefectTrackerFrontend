import React, { useState } from 'react'
import { Button } from 'semantic-ui-react'
import AddModule from './AddModule';



const AddButton = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <Button color="primary" onClick={handleOpen}>Add Module</Button>
            <AddModule open={open} handleOpen={handleOpen} handleClose={handleClose}/>
           
        </div>
    )
}

export default AddButton
