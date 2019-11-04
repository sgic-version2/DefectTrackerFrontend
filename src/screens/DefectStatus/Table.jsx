import React,{useState} from 'react'

import Delete from './DeleteDefect';
import MoreD from './More' ;
import EditDefect from './EditDefect';

import Table from '../../components/tables/table'
import { Button } from 'semantic-ui-react';
const DefectEditButton = () => {

    const [open,setOpen]=useState(false);
    
    const handleOpen=()=>{
        setOpen(true);
    };
    
    const handleClose =() =>{
        setOpen(false);
    };

    const columns = [
        {
           title: 'Defect Status',
           dataIndex: 'status',
           filters: [
              {
                 text: 'Open',
                 value: 'open',
              },
              {
                 text: 'Closed',
                 value: 'Closed',
              },
              {
                text: 'ReOpened',
                value: 'ReOpened',
             },
             {
                text: 'On Hold',
                value: 'On Hold',
             },
             {
                text: 'Resolved',
                value: 'Resolved',
             },
             {
                text: 'Rejected',
                value: 'Rejected',
             },
             {
                text: 'In progress',
                value: 'In progress',
             },
    
           ],
           // specify the condition of filtering result
           // here is that finding the name started with `value`
           onFilter: (value, record) => record.status.indexOf(value) === 0,
           sorter: (a, b ,c) => a.id.length - b.id.length - c.id.length,
           sortDirections: ['descend'],
        },
        {
           title: 'Description',
           dataIndex: 'desc',
          // defaultSortOrder: 'descend',
           //sorter: (a, b) => a.age - b.age,
        },
        {
           title: 'More',
           dataIndex: 'more',
           
          //  defaultSortOrder: 'descend',
          //  sorter: (a, b) => a.age - b.age,
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
           status: 'Open',
           desc: 'some thing to be Described',
           more: <MoreD/>,
           action: <Button.Group>
              <EditDefect open={open} handleClose={handleClose} handleOpen={handleOpen}  />
              <Button  secondary onClick={handleOpen}>Edit</Button>
              <Button.Or />
              <Delete open={open} handleClose={handleClose.delete} handleOpen={handleOpen.delete}  />
              {/* <Button negative onClick={handleOpen.delete}></Button> */}
           </Button.Group>
        },
        {
           key: '2',
           status: 'Closed',
           desc: 'some thing to be Described',
           more: <MoreD/>,
           action: <Button.Group>
              <EditDefect open={open} handleClose={handleClose} handleOpen={handleOpen}  />
              <Button  secondary onClick={handleOpen}>Edit</Button>
              <Button.Or size='large'/>
              <Button negative onClick={handleOpen}>Delete</Button>
           </Button.Group>
        },
        {
           key: '3',
           status: 'ReOpened',
           desc: 'some thing to be Described',
           more: <MoreD/>,
           action: <Button.Group>
             <EditDefect open={open} handleClose={handleClose} handleOpen={handleOpen}  />
             <Button  secondary onClick={handleOpen}>Edit</Button>
              <Button.Or  />
              <Button negative onClick={handleOpen}>Delete</Button>
           </Button.Group>
        },
        {
           key: '4',
           status: 'Closed',
           desc: 'some thing to be Described',
           more: <MoreD/>,
           action: <Button.Group>
              <EditDefect open={open} handleClose={handleClose} handleOpen={handleOpen}  />
              <Button  secondary onClick={handleOpen}>Edit</Button>
              
              <Button.Or />
              <Button negative onClick={handleOpen}>Delete</Button>
           </Button.Group>
        },
     ];

  
    
    return (
        <div>
            <Table column={columns} data={data}/>
        </div>
    )
}

export default DefectEditButton
