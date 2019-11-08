import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'
import { Grid } from '@material-ui/core'
import AllocationButton from './AllocationButton'
import BreadCrumbs from '../../components/breadCrumbs/breadCrumbs'
import Table from '../../components/tables/table'
// import Dropdown from './Dropdown'

import DropDown from './Drowdown'


const columns = [
   {
      title: 'Emp ID',
      dataIndex: 'empId',
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
      title: 'Employee Fullname',
      dataIndex: 'empName',
      // defaultSortOrder: 'descend',
      // sorter: (a, b) => a.age - b.age,
   },
   {
      title: 'Role',
      dataIndex: 'role',
      // defaultSortOrder: 'descend',
      // sorter: (a, b) => a.age - b.age,
   },
   {
      title: 'Availability',
      dataIndex: 'availability',
      // defaultSortOrder: 'descend',
      // sorter: (a, b) => a.age - b.age,
   },
   
];
const data = [
   {
      key: '1',
      empId: '01',
      empName: 'sathurjan',
      role: 60,
      availability: 52,
     
   },
   {
    key: '1',
    empId: '02',
    empName: 'mithusan',
    role: 60,
    availability: 52,
   
   },
   {
    key: '1',
    empId: '03',
    empName: 'mathusanth',
    role: 60,
    availability: 52,
   
   },
];
export default class AllocationTable extends Component {
   render() {
      return (
         <div>
            <Grid direction="row" container>
               <Grid item xs={11} style={{ marginTop: '2%' }}>
                  <Segment>
                     <BreadCrumbs />
                     <DropDown/>
                  
                     <AllocationButton />
                    
                     
                     <Table column={columns} data={data} />
                  </Segment>
               </Grid>
               
              
            </Grid>

            
         </div>
      )
   }
}
