import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
// import './Defect.css'
import { Button } from 'semantic-ui-react'
import { Label } from 'semantic-ui-react'


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

export default function TransitionsModal() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
    const handleOk = () => {
        setOpen(false);
      };
  
   
    
    return (
      <div>
          
          <Button size="small" color="linkedin" onClick={handleOpen}>
         More
        </Button>
     
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              
              
              <div>
  <form className=" "  >
      <div >
  
  <Label>Defect Status:</Label>
  <label>Defect Status</label>
  <br/>
  <br/>
  <Label>Describtion :</Label>
  <label>Defect Describtion</label> 
  <br/><br/>
  <Label>label to be done :</Label>
  <label>adam</label>
  <br/><br/>
  <Label>label to be done :</Label>
  <label>adam</label>
  <br/><br/>
  <Label>label to be done :</Label>
  <label>adam</label>
  <br/><br/>
  <Label>label to be done :</Label>
  <label>adam</label>
  <br/><br/>
  <Label>label to be done :</Label>
  <label>adam</label>
  
  <br/>
  

  <br/>
  
  
  </div>
  </form>
 
  <Button fluid='default' color="primary" value="OK" onClick={handleOk}>Done</Button>
  
  
  
  
  
              </div>
            </div>
          </Fade>
        </Modal>
      </div>
  
  
  
    );
  }