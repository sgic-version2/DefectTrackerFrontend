import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
// import '../employee/edit_employee.css'
// import { Icon } from '@material-ui/core';
import MoreIcon from '@material-ui/icons/More';


const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function MoreModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  // const handleCancel = () => {
  //   setOpen(false);
  // };

  const handleOkk = () => {
    setOpen(false);
  };

  return (
    <div>        

      < MoreIcon  className="" onClick={handleOpen} >
     
      </ MoreIcon>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">More Details</h2>
            
            <div>
<form className=" "  >
    <div >

<label>First Name: Vikines</label>
<br/>

<label>Last Name: Vithujan</label>
{/* <input type="text" id=""  className="" placeholder="Employee Name"></input> */}
<br/>
<label>Phone Number: 0777123456</label>
<br/>

<label>Designation: Admin</label>
{/* <select id="" className="">
    <option value="ADMIN">ADMIN</option>
    <option value="USER">USER</option>
    <option value="HR">HR</option>
    <option value="PM">PM</option>
    <option value="QAL">QAL</option>
    <option value="TECL">TECL</option>
    <option value="QA">QA</option>
    <option value="DEV">DEV</option>
  </select> */}
<br/>

<label>Email: Vithujan13@gmail.com</label>
{/* <input type="text" id="" className="" placeholder="Email"></input> */}

</div>
</form>
<input type="submit" className="" value="OK" onClick={handleOkk}></input>
{/* <input type="submit" className="" value="Cancel" onClick={handleCancel}></input> */}






            </div>
          </div>
        </Fade>
      </Modal>
    </div>



  );
}
