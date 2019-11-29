import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'
import { Grid } from '@material-ui/core'
import DefectListButton from './DefectListButton'
import BreadCrumbs from '../../components/breadCrumbs/breadCrumbs'
import Table from './Table'
import { connect } from "react-redux";
import { changeDataValuesStatus } from './../../fileAction/addDefectStatusAction';
const mapStateToProps = (state) => ({
    data: state.addEmployeeData.employeeDetailsFromState
 })
 const mapDispatchToProps = {
    changeDataValuesStatus
 }

 class ProjectAllocation extends Component {
    render() {
        return (
            <div>
                <Grid item xs={11} style={{ marginTop: '2%' }}>
                    <Segment>
                        <BreadCrumbs />
                        <DefectListButton changeDataValuesStatus={this.props.changeDataValuesStatus} />
                        <Table />
                    </Segment>
                </Grid>
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProjectAllocation)
