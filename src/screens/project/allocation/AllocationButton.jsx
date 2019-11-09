import React, { useState } from 'react';
import { Button } from 'semantic-ui-react';
import Model from '../../../components/model/submitModel';
import RoleAllocation from './RoleAllocation';
import Deallocation from '../deallocation/Deallocation';
import ModuleAllocation from '../allocation/moduleAllocation/ModuleAllocate';

const AllocationButton = () => {
  const [open, setOpen] = useState({
    open: false,
    value: false,
    model: false
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
  const handleOpenModule = () => {
    setOpen({
      model: true
    });
  };

  const handleCloseModule = () => {
    setOpen({
      model: false
    });
  };
  return (
    <div>
      <Button primary onClick={handleOpen}>
        Roll Allocation
      </Button>
      <Button color='red' onClick={handleOpenDeallocation}>
        Deallocation
      </Button>
      <Button primary onClick={handleOpenModule}>
        Module Allocation
      </Button>
      <Model
        open={open.model}
        handleOpen={handleOpenModule}
        handleClose={handleCloseModule}
        width={90}
        form={<ModuleAllocation />}
        title='Module Allocation'
      />
      <Model
        open={open.open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        width={90}
        form={<RoleAllocation />}
        title='Role Allocation'
      />
      <Model
        open={open.value}
        handleOpen={handleOpenDeallocation}
        handleClose={handleCloseDeallocation}
        width={90}
        form={<Deallocation />}
        title='Deallocation'
      />
    </div>
  );
};

export default AllocationButton;
