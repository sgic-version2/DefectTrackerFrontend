import React, { useState } from 'react'
import { Segment } from 'semantic-ui-react'
import { Grid } from '@material-ui/core'
import PriorityAdd from './PriorityAdd'
import BreadCrumbs from '../../../components/breadCrumbs/breadCrumbs'
import Table from '../../../components/tables/table'
import { Button } from 'semantic-ui-react';
import { Icon } from 'semantic-ui-react';
import { Popconfirm, message } from 'antd';
import EditPriority from './EditPriority'





const ProjectAllocation = () => {
   const [open, setOpen] = useState({
      open: false,
      value: false
   });

   const handleOpen = () => {
      setOpen({
         open: true
      })
   };

   const handleClose = () => {
      setOpen({
         open: false
      })
   };
   const handleOpenedit = () => {
      setOpen({
         value: true
      })
   };

   const handleCloseedit = () => {
      setOpen({
         value: false
      })
   };

   const text = 'Are you sure delete this task?'; //Delete button

   function confirm() {
      message.info('Click on Yes.');
   }



   const columns = [

      {
         title: 'Priority',
         dataIndex: 'priority',

         //    filters: [
         //       {
         //          text: 'Joe',
         //          value: 'Joe',
         //       },
         //       {
         //          text: 'Jim',
         //          value: 'Jim',
         //       },
         //    ],
         // specify the condition of filtering result
         // here is that finding the name started with `value`
         //    onFilter: (value, record) => record.name.indexOf(value) === 0,
         sorter: (a, b) => a.priority.length - b.priority.length,
         sortDirections: ['descend'],
      },
      {
         title: 'Description',
         dataIndex: 'description',
         defaultSortOrder: 'descend',
         sorter: (a, b) => a.age - b.age,
      },
      {
         title: 'Icon',
         dataIndex: 'icon',
         defaultSortOrder: 'descend',
         sorter: (a, b) => a.age - b.age,
      },
      {
         title: 'Color',
         dataIndex: 'color',
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
         priority: 'High',
         description: 'High Priority',
         icon: <Icon name='arrow up' />,


         color: 'New York No. 1 Lake Park',
         action: <Button.Group>
            <Button secondary onClick={handleOpenedit}>Edit</Button>
            <Button.Or />

            <Popconfirm placement="topRight" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
               <Button negative>Delete</Button>

            </Popconfirm>

         </Button.Group>
      },
      {
         key: '2',
         priority: 'Medium ',
         description: 'Medium Priority',

         icon: <Icon name='exchange' />,
         color: <div> rfghjk</div>,
         action: <Button.Group>
            <Button secondary onClick={handleOpenedit}>Edit</Button>
            <Button.Or />
            <Popconfirm placement="topRight" type="danger" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
               <Button negative >Delete</Button>
            </Popconfirm>
         </Button.Group>
      },
      {
         key: '3',
         priority: 'Low',
         description: 'Low Priority',
         icon: <Icon name='arrow down' />,
         color: <span>hfd</span>,
         action: <Button.Group>
            <Button secondary onClick={handleOpenedit}>Edit</Button>
            <Button.Or />
            {/* <Button negative>Delete</Button> */}
            <Popconfirm placement="topRight" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
               <Button negative>Delete</Button>
            </Popconfirm>
         </Button.Group>
      },
      // {
      //    key: '4',
      //    name: 'Jim Red',
      //    age: 32,
      //    address: 'London No. 2 Lake Park',
      //    action: <Button.Group>
      //       <Button secondary>Edit</Button>
      //       <Button.Or />
      //       <Button negative>Delete</Button>
      //    </Button.Group>
      // },
   ];



   //  classes = useStyles(props);

   return (
      <div style={{ marginRight: '2%' }}>
         <Grid item xs={11} style={{ marginTop: '2%' }}>
            <Segment>
               <BreadCrumbs />

               <PriorityAdd open={open.open} handleOpen={handleOpen} handleClose={handleClose} />
               <EditPriority open={open.value} handleOpen={handleOpenedit} handleClose={handleCloseedit} />
               <Button color="primary" onClick={handleOpen} >Add Priority</Button>
               <Table column={columns} data={data} />
            </Segment>
         </Grid>
      </div>
   )

}
export default ProjectAllocation