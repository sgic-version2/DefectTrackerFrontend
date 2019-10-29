import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'
import { Grid } from '@material-ui/core'
import AllocationButton from './AllocationButton'
import BreadCrumbs from '../../components/breadCrumbs/breadCrumbs'
import Table from '../../components/tables/table'
import { Button } from 'semantic-ui-react';

const columns = [
    {
       title: 'Name',
       dataIndex: 'name',
       filters: [ 
          {
             text: 'Joe',
             value: 'Joe',
          },
          {
             text: 'Jim',
             value: 'Jim',
          },
       ],
       // specify the condition of filtering result
       // here is that finding the name started with `value`
       onFilter: (value, record) => record.name.indexOf(value) === 0,
       sorter: (a, b) => a.name.length - b.name.length,
       sortDirections: ['descend'],
    },
    {
       title: 'Age',
       dataIndex: 'age',
       defaultSortOrder: 'descend',
       sorter: (a, b) => a.age - b.age,
    },
    {
       title: 'Address',
       dataIndex: 'address',
       defaultSortOrder: 'descend',
       sorter: (a, b) => a.age - b.age,
    },
    {
       title: 'Action',
       dataIndex: 'action',
       defaultSortOrder: 'descend',
    },
 ];
 const data = [
    {
       key: '1',
       name: 'John Brown',
       age: 32,
       address: 'New York No. 1 Lake Park',
       action: <Button.Group>
          <Button secondary>Edit</Button>
          <Button.Or />
          <Button negative>Delete</Button>
       </Button.Group>
    },
    {
       key: '2',
       name: 'Jim Green',
       age: 42,
       address: 'London No. 1 Lake Park',
       action: <Button.Group>
          <Button secondary>Edit</Button>
          <Button.Or />
          <Button negative>Delete</Button>
       </Button.Group>
    },
    {
       key: '3',
       name: 'Joe Black',
       age: 32,
       address: 'Sidney No. 1 Lake Park',
       action: <Button.Group>
          <Button secondary>Edit</Button>
          <Button.Or />
          <Button negative>Delete</Button>
       </Button.Group>
    },
    {
       key: '4',
       name: 'Jim Red',
       age: 32,
       address: 'London No. 2 Lake Park',
       action: <Button.Group>
          <Button secondary>Edit</Button>
          <Button.Or />
          <Button negative>Delete</Button>
       </Button.Group>
    },
 ];
export default class ProjectAllocation extends Component {
    render() {
        return (
            <div>
                <Grid item xs={11} style={{ marginTop: '2%' }}>
                    <Segment>
                        <BreadCrumbs />
                        <AllocationButton />
                        <Table column={columns} data={data}/>
                    </Segment>
                </Grid>
            </div>
        )
    }
}
