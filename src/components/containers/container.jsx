import React from 'react';
import 'semantic-ui-react';
import { Grid } from '@material-ui/core';
import DefectList from '../../screens/DefectStatus/DefectList';
import Dashboard from '../../screens/Dashboard/Dashboard';
import CompanyDetails from '../../screens/company/CompanyDetails';
import ProjectAllocation from '../../screens/project/allocation/ProjectAllocation';
import { Switch, Route } from 'react-router-dom'
import EditRole from '../../screens/project/allocation/EditRole';
import AddEmployee from './../../screens/CompanyAdministaration/AddEmployee';
import ViewDefect from '../../screens/Defect/viewDefect';
import AuditTable from '../../screens/Settings/Troubleshoot and Support/Audit Log/Audit_table/Audit_table'
import PriorityConfig from '../../screens/general_configuration/priority/PriorityConfig'
// container using material Ui
// container has property 
//'textAlight' - left, right, center, justified

export default function Container({ textAlign, collapsed }) {

  const useStyles = {
    root: {
      marginTop: '5%',
      marginLeft: `${!collapsed ? '250px' : '100px'}`,
      background: '#fafafa',
      width: '100%',
      height: '100vh',
      zIndex: -1000,
      transition: 'left,0.5s',
      overflowX: 'auto',
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
            <Route exact path="/" component={EditRole} />
            <Route path="/projectAllocation" component={ProjectAllocation} />
            <Route path="/defectStatus" component={DefectList} />
            <Route path="/defectDashboard" component={Dashboard} />
            <Route path="/companyAdministration" component={AddEmployee} />
            <Route path="/companyCompany" component={CompanyDetails} />
            <Route path="/defect" component={ViewDefect} />
            <Route path="/auditLog" component={AuditTable} />
            <Route path="/priority" component={PriorityConfig} />
          </Switch>

        </Grid>
      </Grid>
    </div>
  )
}


