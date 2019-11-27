import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'
import { Grid } from '@material-ui/core'
import BreadCrumbs from '../../components/breadCrumbs/breadCrumbs'
import EmployeeButton from './EmployeeButton';
import Ntable from './employee_new_table'
import { connect } from "react-redux";
import { changeDataValues } from "../../fileAction/addEmployeeAction";

const mapStateToProps = (state) => ({
   data: state.addEmployeeData.employeeDetailsFromState
})
const mapDispatchToProps = {
   changeDataValues
}
class EmployeeTable extends Component {
   render() {
      return (
         <div>
            <Grid direction="row" container>
               <Grid item xs={11} style={{ marginTop: '2%' }}>
                  <Segment>
                     <BreadCrumbs />
                     <EmployeeButton changeDataValues={this.props.changeDataValues} />
                     <Ntable />
                  </Segment>
               </Grid>
            </Grid>
         </div>
      )
   }

}
export default connect(mapStateToProps, mapDispatchToProps)(EmployeeTable)
