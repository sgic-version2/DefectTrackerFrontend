import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import { Grid } from '@material-ui/core';
import AllocationButton from './AllocationButton';
import BreadCrumbs from '../../../components/breadCrumbs/breadCrumbs';
import Table from '../../../components/tables/table';
import ProjectPerformance from './projectPerformance';
import ProjectRemainingTime from './projectRemainingTime';
import { modelOpen, modelClose } from '../../../fileAction/modelAction';
import {
  roleAllocation,
  deAllocation
} from '../../../fileAction/projectAction';
import { editRole } from '../../../fileAction/roleAction';
import { connect } from 'react-redux';
import { moduleAllocation } from '../../../fileAction/moduleAction';

const mapStateToProps = state => ({
  open: state.modelOpen.open,
  employeeData: state.addEmployeeData.employeeDetailsFromState,
  roleAllocationData: state.roleAllocationData.roleAllocationData,
  moduleAllocationData: state.moduleAllocationData.moduleAllocationData
});
const mapDispatchToProps = {
  modelOpen,
  modelClose,
  roleAllocation,
  deAllocation,
  editRole,
  moduleAllocation
};
const columns = [
   {
      title: 'Project',
      dataIndex: 'projectName',
      //  filters: [
      
   },
   {
      title: 'Software Engineer',
      dataIndex: 'softwareEngineer',
      // defaultSortOrder: 'descend',
      // sorter: (a, b) => a.age - b.age,
   },
   {
      title: 'Associate Software Engineer',
      dataIndex: 'associateSoftwareEngineer',
      // defaultSortOrder: 'descend',
      // sorter: (a, b) => a.age - b.age,
   },
   {
      title: 'Teach Lead',
      dataIndex: 'teachLead',
      // defaultSortOrder: 'descend',
      // sorter: (a, b) => a.age - b.age,
   },
   {
      title: 'QA Teach Lead',
      dataIndex: 'QAteachLead',
      // defaultSortOrder: 'descend',
      // sorter: (a, b) => a.age - b.age,
   },
   {
      title: 'Senior QA',
      dataIndex: 'seniorQA',
      // defaultSortOrder: 'descend',
      // sorter: (a, b) => a.age - b.age,
   },
   {
      title: 'Associate QA',
      dataIndex: 'associateQA',
      // defaultSortOrder: 'descend',
      // sorter: (a, b) => a.age - b.age,

   },
];
const data = [
  {
    key: '1',
    projectName: 'School Management System',
    softwareEngineer: 32,
    associateSoftwareEngineer: 60,
    teachLead: 52,
    QAteachLead: 45,
    seniorQA: 45,
    associateQA: 25
  },
  {
    key: '2',
    projectName: 'Defect Tracker System',
    softwareEngineer: 32,
    associateSoftwareEngineer: 60,
    teachLead: 52,
    QAteachLead: 45,
    seniorQA: 45,
    associateQA: 25
  },
  {
    key: '3',
    projectName: 'HRM System',
    softwareEngineer: 32,
    associateSoftwareEngineer: 60,
    teachLead: 52,
    QAteachLead: 45,
    seniorQA: 45,
    associateQA: 25
  }
];
class ProjectAllocation extends Component {
  render() {
    const {
      open,
      modelClose,
      modelOpen,
      roleAllocation,
      deAllocation,
      editRole
    } = this.props;
    return (
      <div>
        <Grid direction='row' container>
          <Grid item xs={11} style={{ marginTop: '2%' }}>
            <Segment>
              <BreadCrumbs />
              <AllocationButton
                open={open}
                modelOpen={modelOpen}
                modelClose={modelClose}
                roleAllocation={roleAllocation}
                deAllocation={deAllocation}
                employeeData={this.props.employeeData}
                allocationData={this.props.roleAllocationData}
                editRole={editRole}
                moduleAllocation={this.props.moduleAllocation}
                moduleAllocationData={this.props.moduleAllocationData}
              />
              <Table column={columns} data={data} />
            </Segment>
          </Grid>
          <Grid item xs={5} style={{ marginTop: '2%' }}>
            <Segment>
              <ProjectPerformance />
            </Segment>
          </Grid>
          <Grid style={{ marginLeft: '1%' }}></Grid>
          <Grid item xs={6} style={{ marginTop: '2%' }}>
            <Segment style={{ width: '98%' }}>
              <ProjectRemainingTime />
            </Segment>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProjectAllocation);
