import React from 'react';
import 'semantic-ui-react';
import { Grid } from '@material-ui/core';
import ProjectAllocation from '../../screens/project/ProjectAllocation';
// container using material Ui
// container has property 
//'textAlight' - left, right, center, justified

export default function container({ textAlign, collapsed }) {
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
    subContainer:{
      marginLeft:'2%'
    }
  };
  return (
    <div style={useStyles.root}>
      <Grid direction="row" container justify="center" alignItems={textAlign ? textAlign : "center"} style={useStyles.gridContainer} spacing={4}>
        <Grid item xs={12} style={useStyles.subContainer}>
          <ProjectAllocation />
        </Grid>
      </Grid>
    </div>
  )
}


