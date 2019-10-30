import React from 'react';
import 'semantic-ui-react';
import { Grid } from '@material-ui/core';
import ProjectAllocation from '../../screens/project/ProjectAllocation';
import DoughnutChart from './../charts/doughNut';
import DeveloperDashboard from './../../screens/dashboards/developerDashboard';


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
      position:'static',
      marginTop: '5%',
      marginLeft: `${!collapsed ? '250px' : '100px'}`,
      background: '#fafafa',
      width: '100%',
      height: '100vh',
      zIndex: -1000,
      transition: 'left,0.5s',
    },
    gridContainer: {
      overflowY: 'auto',
    },
    subContainer: {
      marginLeft: `${collapsed ? '2%' : '-10%'}`,
      transition: 'marginLeft,0.5s',
      overflow: 'auto !important',

    }
  };

  return (
    <div style={useStyles.root}>
      <Grid direction="row" container justify="center" alignItems={textAlign ? textAlign : "center"} style={useStyles.gridContainer} spacing={4}>
        <Grid item xs={collapsed ? 12 : 10} style={useStyles.subContainer}>
          <ProjectAllocation />
          <DeveloperDashboard/>
        </Grid>
      </Grid>
    </div>
  )
}


