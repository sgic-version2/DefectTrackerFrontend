import React from 'react';
import 'semantic-ui-react';
import { Grid } from '@material-ui/core';
// import ProjectAllocation from '../../screens/project/ProjectAllocation';
import DoughnutChart from './../charts/doughNut';
import DeveloperDashboard from './../../screens/dashboards/developerDashboard';


import CompanyDetails from '../../screens/company/CompanyDetails';

import ProjectAllocation from '../../screens/project/allocation/ProjectAllocation';
import { Switch, Route } from 'react-router-dom'
import EditRole from '../../screens/project/allocation/EditRole';
import AddEmployee from './../../screens/CompanyAdministaration/AddEmployee';
// container using material Ui
// container has property 
//'textAlight' - left, right, center, justified

export default function Container({ textAlign, collapsed }) {
  // const [open, setOpen] = useState(true);

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
          <ProjectAllocation />
          <DeveloperDashboard/>
          <Switch>
            <Route exact path="/" component={EditRole} />
            <Route path="/projectAllocation" component={ProjectAllocation} />
            <Route path= "/companyAdministration" component = {AddEmployee}/>
            <Route path= "/companyCompany" component = {CompanyDetails}/>
          </Switch>
        </Grid>
      </Grid>
    </div>
  )
}


