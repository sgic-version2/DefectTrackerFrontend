import React, { useState } from 'react';
import 'semantic-ui-react';
import { Grid } from '@material-ui/core';
import Model from '../model/submitModel'
import ProjectAllocation from '../../screens/project/ProjectAllocation';
import AddEmployee from './../../screens/CompanyAdministaration/AddEmployee';
import DefectType from '../../screens/CommonConfiguration/DefectType';
// import { ReactDOM } from 'react-dom';
// container using material Ui
// container has property 
//'textAlight' - left, right, center, justified

export default function Container({ textAlign, collapsed }) {
  // const [open, setOpen] = useState(false);

  // const handleOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };
  const useStyles = {
    root: {
      marginTop: '5%',
      marginLeft: `${!collapsed ? '250px' : '100px'}`,
      background: '#fafafa',
      width: '100%',
      height: 'auto',
      zIndex: -1000,
      transition: 'left,0.5s',
    },
    gridContainer: {
      overflowY: 'auto',
    },
    subContainer: {
      marginLeft: `${collapsed ? '2%' : '-10%'}`,
      transition: 'marginLeft,5s',

    }
  };

  return (
    <div style={useStyles.root}>
      <Grid direction="row" container justify="center" alignItems={textAlign ? textAlign : "center"} style={useStyles.gridContainer} spacing={4}>
        <Grid item xs={collapsed ? 12 : 10} style={useStyles.subContainer}>
          {/* <Model open={open} handleClose={handleClose} handleOpen={handleOpen} form={<ProjectAllocation/>} /> */}
        <AddEmployee/>
        {/* <DefectType/> */}
      
      
        </Grid>

      </Grid>
    </div>
  )
}


