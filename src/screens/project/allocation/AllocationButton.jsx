import React, { useState } from 'react';
import { Button } from 'semantic-ui-react';
import Model from '../../../components/model/submitModel';
import RoleAllocation from './RoleAllocation';
import Deallocation from '../deallocation/Deallocation';
import ModuleAllocation from '../allocation/moduleAllocation/ModuleAllocate';

const AllocationButton = () => {
  const [modelopen, setOpen] = useState({
    moduleAllocation: false,
    deallocation: false,
    roleAllocation: false
  })

  const modulehandleOpen = () => {
    setOpen({
      moduleAllocation: true
    })
  };

  const modulehandleClose = () => {
    setOpen({
      moduleAllocation: false
    })
  };
  const handleOpenDeallocation = () => {
    setOpen({
      deallocation: true
    })
  };

  const handleCloseDeallocation = () => {
    setOpen({
      deallocation: false
    })
  };
  const handleOpenRole = () => {
    setOpen({
      roleAllocation: true
    })
  };

  const handleCloseRole = () => {
    setOpen({
      roleAllocation: false
    })
  };

  return (
    <div>
      <Button primary onClick={handleOpenRole}>
        Roll Allocation
      </Button>
      <Button color='red' onClick={handleOpenDeallocation}>
        Deallocation
      </Button>
      <Button primary onClick={modulehandleOpen}>
        Module Allocation
      </Button>
      <Model
        open={modelopen.moduleAllocation}
        handleOpen={modulehandleOpen}
        handleClose={modulehandleClose}
        width={90}
        form={<ModuleAllocation />}
        title='Module Allocation'
      />
      <Model
        open={modelopen.roleAllocation}
        handleOpen={handleOpenRole}
        handleClose={handleCloseRole}
        width={90}
        form={<RoleAllocation />}
        title='Role Allocation'
      />
      <Model
        open={modelopen.deallocation}
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
