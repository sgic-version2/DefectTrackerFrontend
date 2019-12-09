import React from 'react';
import 'semantic-ui-react';
import { Grid } from '@material-ui/core';
import DefectList from '../../screens/DefectStatus/defectStatus';

import CompanyDetails from '../../screens/company/CompanyDetails';
import ProjectAllocation from '../../screens/project/allocation/ProjectAllocation';
import { Switch, Route } from 'react-router-dom';
import CompanyEmployee from './../../screens/CompanyAdministaration/CompanyEmployee';
import ViewDefect from '../../screens/Defect/viewDefect';
import AuditTable from '../../screens/Settings/Troubleshoot and Support/Audit Log/Audit_table/Audit_table';
import PriorityConfig from '../../screens/general_configuration/priority/PriorityConfig';

import AllocationTable from '../../screens/HrAllocate/AllocationTable';
import EmployeeTable from './../../screens/employee/EmployeeTable';
import DefectType from '../../screens/CommonConfiguration/DefectConfig/DefectConfic';
import DefectStatusFlow from '../../screens/WorkFlow/DefectStatus/DefectStatusFlow';
import TeachLeadPrivilege from '../../screens/Settings/Privilege/TechLeadPrivileges';
import ManageProject from '../../screens/ManageProject/ProjectDetails';
<<<<<<< HEAD
//import Severity from '../../screens/general_configuration/severity/SeverityConfig';
//import ManageProject from '../../screens/ManageProject/ProjectList';
=======
>>>>>>> jeyaamuthan
import Severity from '../../screens/general_configuration/severity/SeverityConfig';
import ProfileSetting from '../../screens/profile/profile';
import DefectRolesFlow from '../../screens/WorkFlow/DefectRoles/DefectRolesFlow';
import DeveloperDashboard from './../../screens/dashboards/developerDashboard';
import LookAndFeel from '../../screens/Settings/settings';
import QADashboard from '../../screens/dashboards/QADashboard/chart';
import Module from '../../screens/Module/ModuleList';
import PmDashboard from '../../screens/dashboards/PmDashboard/chart';

import QAPrivilege from '../../screens/Settings/Privilege/QALeadPrivileges';
import companyPrivilege from '../../screens/Settings/Privilege/CompanyPrivilege';
import projectPrivilege from '../../screens/Settings/Privilege/CompanyPrivilege';
import Dashboard from './../../screens/Dashboard/Dashboard';
import Role from './../../screens/Role/AddRole';

// container using material Ui
// container has property
//'textAlight' - left, right, center, justified

export default function Container({ textAlign }) {
  const useStyles = {
    root: {
      marginTop: "5%",
      // marginLeft: `${!collapsed ? '250px' : '80px'}`,
      marginLeft: "80px",
      background: "transparent",
      width: "100%",
      height: "100vh",
      zIndex: -1000,
      transition: "left,0.5s",
      overflowX: "auto"
    },
    gridContainer: {
      overflowY: "auto"
    },
    subContainer: {
      // marginLeft: `${collapsed ? '2%' : '-10%'}`,
      marginLeft: "1%",
      transition: "marginLeft,0.5s",
      overflow: "auto !important",
      marginBottom: "10%"
    }
  };

  return (
    <div style={useStyles.root}>
      <Grid
        direction="row"
        container
        justify="center"
        alignItems={textAlign ? textAlign : "center"}
        style={useStyles.gridContainer}
        spacing={4}
      >
        <Grid item xs={12} style={useStyles.subContainer}>
          <Switch>
<<<<<<< HEAD
            <Route path='/defect/projectAllocation' component={ProjectAllocation} />
=======
            <Route
              path='/defect/projectAllocation'
              component={ProjectAllocation}
            />
>>>>>>> jeyaamuthan
            <Route path='/defect/hrAllocation' component={AllocationTable} />
            <Route path='/defect/defectStatus' component={DefectList} />
            <Route path='/defect/defectDashboard' component={Dashboard} />
            <Route path='/defect/companyAdministration' component={CompanyEmployee} />
            <Route path='/defect/companyCompany' component={CompanyDetails} />
            <Route path='/defect/defect' component={ViewDefect} />
            <Route path='/defect/auditLog' component={AuditTable} />
            <Route path='/defect/priority' component={PriorityConfig} />
            <Route path='/defect/companyEmployee' component={EmployeeTable} />
            <Route path='/defect/defectType' component={DefectType} />
            <Route path='/defect/defectStatusFlow' component={DefectStatusFlow} />
            <Route path='/defect/TeachLeadPrivileges' component={TeachLeadPrivilege}/>
            <Route path='/defect/manageProject' component={ManageProject} />
            <Route path='/defect/severity' component={Severity} />
            <Route path='/defect/profileSetting' component={ProfileSetting} />
            <Route path='/defect/defectRolesFlow' component={DefectRolesFlow} />
            <Route path='/defect/developer' component={DeveloperDashboard} />
            <Route path='/defect/lookandfeel' component={LookAndFeel} />
            <Route path='/defect/qa' component={QADashboard} />
            <Route path='/defect/module' component={Module} />
            <Route path='/defect/projectManager' component={PmDashboard} />
            <Route path='/defect/qaLeadPrivilege' component={QAPrivilege} />
<<<<<<< HEAD
            <Route path='/defect/CompanyPrivilege' component={companyPrivilege} />
            <Route path='/defect/ProjectPrivilege' component={projectPrivilege} />
            <Route path='/defect/Role' component={Role} />
=======
            <Route
              path='/defect/CompanyPrivilege'
              component={companyPrivilege}
            />
            <Route
              path='/defect/ProjectPrivilege'
              component={projectPrivilege}
            />
>>>>>>> jeyaamuthan
          </Switch>
        </Grid>
      </Grid>
    </div>
  );
}
