// import React, { useState } from 'react'
import React from 'react'
import { Button } from 'semantic-ui-react'
// import RoleAllocation from './RoleAllocation'
// import Deallocation from './Deallocation'
// import AddEmployee from './../CompanyAdministaration/AddEmployee';
import TransitionsModal from './add_employee';
// import EditEmployee from './edit_employee';


const EmployeeButton = () => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    // const handleOpenDeallocation = () => {
    //     setOpen({
    //         value: true
    //     });
    // };

    // const handleCloseDeallocation = () => {
    //     setOpen({
    //         value: false
    //     });
    // };

    return (
        <div>
            <Button color="primary" onClick={handleOpen}>Add Employee</Button>

            {/* <Button onClick={handleOpen}  form={<TransitionsModal/>}>Add Employee</Button> */}

            {/* <Button color="red" onClick={handleOpenDeallocation}>Deallocation</Button> */}
            {/* <Button primary>Module Allocation</Button> */}
           <TransitionsModal open={open} handleOpen={handleOpen} handleClose={handleClose} width={30} title="Add Employee"/>
            {/* <Model open={open.value} handleOpen={handleOpenDeallocation} handleClose={handleCloseDeallocation} width={90} form={<Deallocation />} title='Deallocation' /> */}

        </div>
    )
}

export default EmployeeButton
