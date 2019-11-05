import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'
import { Grid } from '@material-ui/core'

import BreadCrumbs from '../../components/breadCrumbs/breadCrumbs'
import Table from '../../components/tables/table'
import { Button } from 'semantic-ui-react';
import AddButton from './AddButton'


const columns = [
   {
      title: 'Defect Type',
      dataIndex: 'defecttype',
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
      title: ' Description',
      dataIndex: 'description',
      // defaultSortOrder: 'descend',
      // sorter: (a, b) => a.age - b.age,
   },

   {
      title: 'Action',
      dataIndex: 'action',
      // defaultSortOrder: 'descend',
      // sorter: (a, b) => a.age - b.age,
   },
];
const data = [
   {
      key: '1',
      defecttype: 'Arithmetic Defects',
      description: 'High',
      action: <Button.Group>
      {/* <EditCompany open={this.state.open} handleOpen={this.handleOpen} handleClose={this.handleClose}/>  */}
     <Button   secondary>Edit</Button>
     <Button.Or />
     {/* <Popconfirm placement="topRight" title={text} onConfirm={confirm} okText="yes" cancelText="No"> */}
     <Button negative>Delete</Button>
     {/* </Popconfirm> */}
  </Button.Group>,
   },
   {
    key: '2',
    defecttype: 'Logical Defects',
    description: 'High',
    action: <Button.Group>
    {/* <EditCompany open={this.state.open} handleOpen={this.handleOpen} handleClose={this.handleClose}/>  */}
   <Button   secondary>Edit</Button>
   <Button.Or />
   {/* <Popconfirm placement="topRight" title={text} onConfirm={confirm} okText="yes" cancelText="No"> */}
   <Button negative>Delete</Button>
   {/* </Popconfirm> */}
</Button.Group>,
 },
 {
    key: '3',
    defecttype: 'Syntax Defects',
    description: 'High',
    action: <Button.Group>
    {/* <EditCompany open={this.state.open} handleOpen={this.handleOpen} handleClose={this.handleClose}/>  */}
   <Button   secondary>Edit</Button>
   <Button.Or />
   {/* <Popconfirm placement="topRight" title={text} onConfirm={confirm} okText="yes" cancelText="No"> */}
   <Button negative>Delete</Button>
   {/* </Popconfirm> */}
</Button.Group>,
 },
];
export default class DefectConfic extends Component {
   render() {
      return (
         <div>
            <Grid direction="row" container>
               <Grid item xs={11} style={{ marginTop: '2%' }}>
                  <Segment>
                     <BreadCrumbs />
                     <AddButton/>
                     <Table column={columns} data={data} />
                  </Segment>
               </Grid>
            </Grid>
         </div>
      )
   }
}
