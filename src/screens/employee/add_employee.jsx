import React from 'react';
//import { makeStyles } from '@material-ui/core/styles';
import Model from '../../components/model/submitModel'
import '../employee/employee_details.css'
import AddEmployeeForm from './add_employee_form'


// const useStyles = makeStyles(theme => ({
//   modal: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   paper: {
//     backgroundColor: theme.palette.background.paper,
//     border: '2px solid #000',
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(2, 4, 3),
//   },
// }));

export default function TransitionsModal({open,handleOpen,handleClose,width,title}) {
  //const classes = useStyles();

  

  

  return (
    <div>
      <Model open={open} handleOpen={handleOpen} handleClose={handleClose} form={<AddEmployeeForm/>} width={width} title={title}/>
    </div>



  );
}
