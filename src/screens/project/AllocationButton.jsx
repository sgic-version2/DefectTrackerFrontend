import React, { useState } from 'react'
import { Button } from 'semantic-ui-react'
import Model from '../../components/model/submitModel'
import RoleAllocation from './RoleAllocation'

const AllocationButton = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <Button color="primary" onClick={handleOpen}>Roll Allocation</Button>
            <Button color="red">Deallocation</Button>
            <Button primary>Module Allocation</Button>
            <Model open={open} handleOpen={handleOpen} handleClose={handleClose} width={90} form={<RoleAllocation/>} title='Roll Allocation'/>
        </div>
    )
}

export default AllocationButton
