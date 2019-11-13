import React, { useState } from 'react'
import { Segment } from 'semantic-ui-react'
import { Grid } from '@material-ui/core'
import PriorityAdd from './PriorityAdd'
import BreadCrumbs from '../../../components/breadCrumbs/breadCrumbs'
import Table from '../../../components/tables/table'
import { Button } from 'semantic-ui-react';
import { Icon } from 'semantic-ui-react';
import { Popconfirm, message } from 'antd';
import EditSeverity from './EditSeverity'


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
         title: 'Severity',
         dataIndex: 'severity',
         sortDirections: ['descend'],
         sorter: (a, b) => a.priority.length - b.priority.length,
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
         severity: 'High',
         description: 'High Severity',
         icon: <Icon name='arrow up' />,


         color: 'red',
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
         severity: 'Medium ',
         description: 'Medium Severity',

         icon: <Icon name='exchange' />,
         color: <div> green</div>,
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
         severity: 'Low',
         description: 'Low Severity',
         icon: <Icon name='arrow down' />,
         color: <span>yellow</span>,
         action: <Button.Group>
            <Button secondary onClick={handleOpenedit}>Edit</Button>
            <Button.Or />
            {/* <Button negative>Delete</Button> */}
            <Popconfirm placement="topRight" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
               <Button negative>Delete</Button>
            </Popconfirm>
         </Button.Group>
      },

   ];



   //  classes = useStyles(props);

   return (
      <div style={{ marginRight: '2%' }}>
         <Grid direction="row" container>
            <Grid item xs={11} style={{ marginTop: '2%' }}>
               <Segment>
                  <BreadCrumbs />
                  <PriorityAdd open={open.open} handleOpen={handleOpen} handleClose={handleClose} />
                  <EditSeverity open={open.value} handleOpen={handleOpenedit} handleClose={handleCloseedit} />
                  <Button color="primary" onClick={handleOpen} >Add Severity</Button>
                  <Table column={columns} data={data} />
               </Segment>
            </Grid>
         </Grid>
      </div>
   )

}
export default ProjectAllocation