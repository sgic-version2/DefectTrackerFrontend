import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'
import { Grid } from '@material-ui/core'
import BreadCrumbs from '../../components/breadCrumbs/breadCrumbs'
import EmployeeButton from './EmployeeButton';
import Ntable from './employee_new_table'

export default class EmployeeTable extends Component {
   render() {
      return (
         <div>
            <Grid direction="row" container>
               <Grid item xs={11} style={{ marginTop: '2%' }}>
                  <Segment>
                     <BreadCrumbs />
                     <EmployeeButton />
                     <Ntable />
                  </Segment>
               </Grid>
            </Grid>
         </div>
      )
   }

}

