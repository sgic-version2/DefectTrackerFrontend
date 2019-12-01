import React,{useState} from 'react'


import EditEmployee from './edit_employee';
import Delete from './delete'
import More from './more_details'
// import MoreOutlinedIcon from '@material-ui/icons/MoreOutlined';
import Table from '../../components/tables/table'

import { Button } from 'semantic-ui-react';

const Employeenewtable = () => {

    const [open,setOpen] = useState(false);

    const handleOpen =()=>{
      setOpen(true);
    };
  
    const handleClose =()=>{
      setOpen(false);
    };

    
const columns = [
    {
       title: 'Emp Id',
       dataIndex: 'name',
       filters: [
          {
             text: 'vithujan',
             value: 'vithujan',
          },
          {
             text: 'vithujan',
             value: 'vithujan',
          },
       ],
       // specify the condition of filtering result
       // here is that finding the name started with `value`
       onFilter: (value, record) => record.name.indexOf(value) === 0,
       sorter: (a, b) => a.name.length - b.name.length,
       sortDirections: ['descend'],
    },
    {
       title: 'Employee Name',
       dataIndex: 'age',
       defaultSortOrder: 'descend',
       sorter: (a, b) => a.age - b.age,
    },
    {
       title: 'Designation',
       dataIndex: 'address',
       defaultSortOrder: 'descend',
       sorter: (a, b) => a.age - b.age,
    },
    {
       title: 'Email',
       dataIndex: 'email',
       defaultSortOrder: 'descend',
       sorter: (a, b) => a.age - b.age,
    },
 
    {
       title: 'Action',
      render:item=><Button.Group>
         <EditEmployee open={open} handleOpen={handleOpen} handleClose={handleClose} />
        <Button secondary onClick={handleOpen}>Edit</Button>
        <Button.Or />
        <Delete open={open} handleOpen={handleOpen.del} handleClose={handleClose} />
     </Button.Group>
    },
    {
       title: 'View More',
       dataIndex: 'more',
       defaultSortOrder: 'descend',
       sorter: (a, b) => a.age - b.age,
    },
 ];
 const data = [
    {
       key: '1',
       name: 1,
       age: 'Vithujan',
       address: 'Admin',
       email: 'vithujan13@gmail.com',
 
      //  action: <Button.Group>
      //      <EditEmployee open={open} handleOpen={handleOpen} handleClose={handleClose} />
      //     <Button secondary onClick={handleOpen}>Edit</Button>
      //     <Button.Or />
      //     <Delete open={open} handleOpen={handleOpen.del} handleClose={handleClose} />
      //  </Button.Group>,

       more: 
       <Button.Group>
       <More open={open} handleOpen={handleOpen.more} handleClose={handleClose} />
       </Button.Group>
 
    },
    {
       key: '2',
       name: 2,
       age: 'Vinojan',
       address: 'QA',
       email: 'vinoj@gmail.com',
 
      //  action: <Button.Group>
      //     <EditEmployee open={open} handleOpen={handleOpen} handleClose={handleClose} />
      //     <Button secondary onClick={handleOpen}>Edit</Button>
      //     <Button.Or />
      //     <Delete open={open} handleOpen={handleOpen.del} handleClose={handleClose} />

      //  </Button.Group>,
       
       more: 
       <Button.Group>
       <More open={open} handleOpen={handleOpen.more} handleClose={handleClose} />
       </Button.Group>
    },
    {
       key: '3',
       name: 3,
       age: 'Mithusan',
       address: 'SE',
       email: 'mithusan@gmail.com',
 
      //  action: <Button.Group>
      //     <EditEmployee open={open} handleOpen={handleOpen} handleClose={handleClose} />
      //     <Button secondary onClick={handleOpen}>Edit</Button>
      //     <Button.Or />
      //     <Delete open={open} handleOpen={handleOpen.del} handleClose={handleClose} />

      //  </Button.Group>,
       more: 
       <Button.Group>
       <More open={open} handleOpen={handleOpen.more} handleClose={handleClose} />
       </Button.Group>
 
    },
    {
       key: '4',
       name: 4,
       age: 'Mathusanth',
       address: 'HR',
       email: 'Mathusanth@gmail.com',
 
      //  action: <Button.Group>
      //    <EditEmployee open={open} handleOpen={handleOpen} handleClose={handleClose} />
      //     <Button secondary onClick={handleOpen}>Edit</Button>
      //     <Button.Or />
      //     <Delete open={open} handleOpen={handleOpen.del} handleClose={handleClose} />

      //  </Button.Group>,
       more: 
       <Button.Group>
       <More open={open} handleOpen={handleOpen.more} handleClose={handleClose} />
       </Button.Group>
 
    },
 ];

    return (
        <div>
            <Table column={columns} data={data} />
        </div>
    )
}

export default Employeenewtable
