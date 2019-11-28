import React, { useState } from 'react'
import { Button } from 'semantic-ui-react'
import Model from '../../components/model/submitModel'
import EmpAllocation from './EmpAllocation'
const AllocationButton = () => {
    const [open, setOpen] = useState({
        open: false,
        value: false
    });

    const handleOpen = () => {
        setOpen({
            open: true
        });
    };

    const handleClose = () => {
        setOpen({
            open: false
        });
    };
    
    return (
        <div>
            <br></br>
            <Button color="primary" onClick={handleOpen}> Allocation</Button>
            {/* {/* <Button color="red" onClick={handleOpenDeallocation}>Deallocation</Button> */}
            {/* <Button primary>Module Allocation</Button> */}
            <Model open={open.open} handleOpen={handleOpen} handleClose={handleClose} width={90} form={<EmpAllocation />} title='Employee Allocation' />
            
             {/* <Model open={open.value} handleOpen={handleOpenDeallocation} handleClose={handleCloseDeallocation} width={90} form={<Deallocation />} title='Deallocation' />  */}
        </div>
    )
}

export default AllocationButton
