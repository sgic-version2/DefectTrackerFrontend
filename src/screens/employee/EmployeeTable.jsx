import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'
import { Grid } from '@material-ui/core'


// import AllocationButton from './AllocationButton'
import BreadCrumbs from '../../components/breadCrumbs/breadCrumbs'

import EmployeeButton from './EmployeeButton';
// import TransitionsModal from './add_employee'

import Ntable from './employee_new_table'

// const EmployeeeButton = () => {
//    const [open, setOpen] = React.useState(false);

//    const handleOpen = () => {
//      setOpen(true);
//    };
 
//    const handleClose = () => {
//      setOpen(false);
   
//    };





export default class EmployeeTable extends Component {
   render() {
      return (
         <div>
            <Grid item xs={11} style={{ marginTop: '2%' }}>
               <Segment>
                  <BreadCrumbs />
                  <EmployeeButton />

                  {/* <EditEmployee open={open} handleOpen={handleOpen} handleClose={handleClose} width={30} title="Add Employee"/> */}

                  <Ntable/>
               </Segment>
            </Grid>
         </div>
      )
   }

}

