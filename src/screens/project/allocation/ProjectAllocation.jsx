import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'
import { Grid } from '@material-ui/core'
import AllocationButton from './AllocationButton'
import BreadCrumbs from '../../../components/breadCrumbs/breadCrumbs'
import Table from '../../../components/tables/table'
import ProjectPerformance from './projectPerformance'
import ProjectRemainingTime from './projectRemainingTime'

const columns = [
   {
      title: 'Project',
      dataIndex: 'projectName',
      //  filters: [
      //     {
      //        text: 'Joe',
      //        value: 'Joe',
      //     },
      //     {
      //        text: 'Jim',
      //        value: 'Jim',
      //     },
      //  ],
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      //  onFilter: (value, record) => record.name.indexOf(value) === 0,
      //  sorter: (a, b) => a.name.length - b.name.length,
      //  sortDirections: ['descend'],
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
      projectName: 'Defect System',
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
   },
];
export default class ProjectAllocation extends Component {
   render() {
      return (
         <div>
            <Grid direction="row" container>
               <Grid item xs={11} style={{ marginTop: '2%' }}>
                  <Segment>
                     <BreadCrumbs />
                     <AllocationButton />
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
      )
   }
}
