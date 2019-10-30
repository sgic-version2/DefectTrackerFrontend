import React from 'react'
import { Button } from 'semantic-ui-react'
<<<<<<< HEAD
import Model from '../../components/model/submitModel'
import RoleAllocation from './RoleAllocation'
import Deallocation from './Deallocation'

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
    const handleOpenDeallocation = () => {
        setOpen({
            value: true
        });
    };

    const handleCloseDeallocation = () => {
        setOpen({
            value: false
        });
    };
    return (
        <div>
            <Button color="primary" onClick={handleOpen}>Roll Allocation</Button>
            <Button color="red" onClick={handleOpenDeallocation}>Deallocation</Button>
            <Button primary>Module Allocation</Button>
            <Model open={open.open} handleOpen={handleOpen} handleClose={handleClose} width={90} form={<RoleAllocation />} title='Roll Allocation' />
            <Model open={open.value} handleOpen={handleOpenDeallocation} handleClose={handleCloseDeallocation} width={90} form={<Deallocation />} title='Deallocation' />
=======

const AllocationButton = () => {
    return (
        <div>
            <Button  color="primary">Roll Allocation</Button>
            <Button color="red">Deallocation</Button>
            <Button primary>Module Allocation</Button>
>>>>>>> thulasiga
        </div>
    )
}

export default AllocationButton
