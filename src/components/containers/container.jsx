//import React, { useState } from 'react';
import React from 'react';
import 'semantic-ui-react';
import { Grid } from '@material-ui/core';
// import Model from '../model/submitModel'
import ProjectAllocation from '../../screens/project/ProjectAllocation';
import { Switch, Route } from 'react-router-dom'
// import EditRole from '../../screens/project/EditRole';
// import AddEmployee from './../../screens/CompanyAdministaration/AddEmployee';
//import DefectType from '../../screens/CommonConfiguration/DefectType';
//import AddEmployee from './../../screens/employee/AddEmployee';
import EmployeeTable from '../../screens/employee/EmployeeTable';

// import DoughnutChartDemo from '../../screens/ProductAdministration/DoughNut'
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
      overflow: 'auto',
    },
    gridContainer: {
      overflowY: 'auto',
    },
    subContainer: {
      marginLeft: `${collapsed ? '2%' : '-10%'}`,
      transition: 'marginLeft,0.5s',
      overflow: 'auto !important',
      marginBottom: '10%'


    }
  };

  return (
    <div style={useStyles.root}>
      <Grid direction="row" container justify="center" alignItems={textAlign ? textAlign : "center"} style={useStyles.gridContainer} spacing={4}>
        <Grid item xs={collapsed ? 12 : 10} style={useStyles.subContainer}>
          <Switch>
            <Route exact path="/" component=""/>
            <Route path="/projectAllocation" component={ProjectAllocation} />
            <Route path="/companyEmployee" component={EmployeeTable} />
          </Switch>
        </Grid>

      </Grid>
    </div>
  )
}


