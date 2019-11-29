import React from 'react'
import { Segment } from 'semantic-ui-react'
import { Grid } from '@material-ui/core'
import Table from '../../../components/tables/table'

const column = [
    { title: 'Privilege', dataIndex: 'Privilege' },
    { title: 'ProjectManager', dataIndex: 'projectmanager' },
    { title: 'Developer', dataIndex: 'developer' },
    { title: 'QA', dataIndex: 'qa' },
    { title: 'TechLead', dataIndex: 'techlead' },
    { title: 'QALead', dataIndex: 'qalead' }
]
const privilege = [
    {
        // name: 'Privilege', button: 'QA'
        Privilege: 'Add Defect', 
        projectmanager: <div class="main"><div class="center"><input type="checkbox" name="" /><span className="span">ON</span><span className="span">OFF</span></div></div>,
        developer: <div class="main"><div class="center"><input type="checkbox" name="" /><span className="span">ON</span><span className="span">OFF</span></div></div>,
        qa: <div class="main"><div class="center"><input type="checkbox" name="" /><span className="span">ON</span><span className="span">OFF</span></div></div>,
        techlead: <div class="main"><div class="center"><input type="checkbox" name="" /><span className="span">ON</span><span className="span">OFF</span></div></div>,
        qalead: <div class="main"><div class="center"><input type="checkbox" name="" /><span className="span">ON</span><span className="span">OFF</span></div></div>
    },
    {
        Privilege: 'Edit Defect',
        projectmanager: <div class="main"><div class="center"><input type="checkbox" name="" /><span className="span">ON</span><span className="span">OFF</span></div></div>,
        developer: <div class="main"><div class="center"><input type="checkbox" name="" /><span className="span">ON</span><span className="span">OFF</span></div></div>,
        qa: <div class="main"><div class="center"><input type="checkbox" name="" /><span className="span">ON</span><span className="span">OFF</span></div></div>,
        techlead: <div class="main"><div class="center"><input type="checkbox" name="" /><span className="span">ON</span><span className="span">OFF</span></div></div>,
        qalead: <div class="main"><div class="center"><input type="checkbox" name="" /><span className="span">ON</span><span className="span">OFF</span></div></div>
    },
    {
        Privilege: 'Manage Defect',
        projectmanager: <div class="main"><div class="center"><input type="checkbox" name="" /><span className="span">ON</span><span className="span">OFF</span></div></div>,
        developer: <div class="main"><div class="center"><input type="checkbox" name="" /><span className="span">ON</span><span className="span">OFF</span></div></div>,
        qa: <div class="main"><div class="center"><input type="checkbox" name="" /><span className="span">ON</span><span className="span">OFF</span></div></div>,
        techlead: <div class="main"><div class="center"><input type="checkbox" name="" /><span className="span">ON</span><span className="span">OFF</span></div></div>,
        qalead: <div class="main"><div class="center"><input type="checkbox" name="" /><span className="span">ON</span><span className="span">OFF</span></div></div>
    },
    {
        Privilege: 'Defect Dashboard',
        projectmanager: <div class="main"><div class="center"><input type="checkbox" name="" /><span className="span">ON</span><span className="span">OFF</span></div></div>,
        developer: <div class="main"><div class="center"><input type="checkbox" name="" /><span className="span">ON</span><span className="span">OFF</span></div></div>,
        qa: <div class="main"><div class="center"><input type="checkbox" name="" /><span className="span">ON</span><span className="span">OFF</span></div></div>,
        techlead: <div class="main"><div class="center"><input type="checkbox" name="" /><span className="span">ON</span><span className="span">OFF</span></div></div>,
        qalead: <div class="main"><div class="center"><input type="checkbox" name="" /><span className="span">ON</span><span className="span">OFF</span></div></div>
    },
    {
        Privilege: 'Add Module',
        projectmanager: <div class="main"><div class="center"><input type="checkbox" name="" /><span className="span">ON</span><span className="span">OFF</span></div></div>,
        developer: <div class="main"><div class="center"><input type="checkbox" name="" /><span className="span">ON</span><span className="span">OFF</span></div></div>,
        qa: <div class="main"><div class="center"><input type="checkbox" name="" /><span className="span">ON</span><span className="span">OFF</span></div></div>,
        techlead: <div class="main"><div class="center"><input type="checkbox" name="" /><span className="span">ON</span><span className="span">OFF</span></div></div>,
        qalead: <div class="main"><div class="center"><input type="checkbox" name="" /><span className="span">ON</span><span className="span">OFF</span></div></div>
    },
    {
        Privilege: 'Edit Module',
        projectmanager: <div class="main"><div class="center"><input type="checkbox" name="" /><span className="span">ON</span><span className="span">OFF</span></div></div>,
        developer: <div class="main"><div class="center"><input type="checkbox" name="" /><span className="span">ON</span><span className="span">OFF</span></div></div>,
        qa: <div class="main"><div class="center"><input type="checkbox" name="" /><span className="span">ON</span><span className="span">OFF</span></div></div>,
        techlead: <div class="main"><div class="center"><input type="checkbox" name="" /><span className="span">ON</span><span className="span">OFF</span></div></div>,
        qalead: <div class="main"><div class="center"><input type="checkbox" name="" /><span className="span">ON</span><span className="span">OFF</span></div></div>
    },
    {
        Privilege: 'Manage Module',
        projectmanager: <div class="main"><div class="center"><input type="checkbox" name="" /><span className="span">ON</span><span className="span">OFF</span></div></div>,
        developer: <div class="main"><div class="center"><input type="checkbox" name="" /><span className="span">ON</span><span className="span">OFF</span></div></div>,
        qa: <div class="main"><div class="center"><input type="checkbox" name="" /><span className="span">ON</span><span className="span">OFF</span></div></div>,
        techlead: <div class="main"><div class="center"><input type="checkbox" name="" /><span className="span">ON</span><span className="span">OFF</span></div></div>,
        qalead: <div class="main"><div class="center"><input type="checkbox" name="" /><span className="span">ON</span><span className="span">OFF</span></div></div>
    },
    {
        Privilege: 'Add Submodule',
        projectmanager: <div class="main"><div class="center"><input type="checkbox" name="" /><span className="span">ON</span><span className="span">OFF</span></div></div>,
        developer: <div class="main"><div class="center"><input type="checkbox" name="" /><span className="span">ON</span><span className="span">OFF</span></div></div>,
        qa: <div class="main"><div class="center"><input type="checkbox" name="" /><span className="span">ON</span><span className="span">OFF</span></div></div>,
        techlead: <div class="main"><div class="center"><input type="checkbox" name="" /><span className="span">ON</span><span className="span">OFF</span></div></div>,
        qalead: <div class="main"><div class="center"><input type="checkbox" name="" /><span className="span">ON</span><span className="span">OFF</span></div></div>
    },
    {
        Privilege: 'Edit Submodule',
        projectmanager: <div class="main"><div class="center"><input type="checkbox" name="" /><span className="span">ON</span><span className="span">OFF</span></div></div>,
        developer: <div class="main"><div class="center"><input type="checkbox" name="" /><span className="span">ON</span><span className="span">OFF</span></div></div>,
        qa: <div class="main"><div class="center"><input type="checkbox" name="" /><span className="span">ON</span><span className="span">OFF</span></div></div>,
        techlead: <div class="main"><div class="center"><input type="checkbox" name="" /><span className="span">ON</span><span className="span">OFF</span></div></div>,
        qalead: <div class="main"><div class="center"><input type="checkbox" name="" /><span className="span">ON</span><span className="span">OFF</span></div></div>
    },
    {
        Privilege: 'Manage Submodule',
        projectmanager: <div class="main"><div class="center"><input type="checkbox" name="" /><span className="span">ON</span><span className="span">OFF</span></div></div>,
        developer: <div class="main"><div class="center"><input type="checkbox" name="" /><span className="span">ON</span><span className="span">OFF</span></div></div>,
        qa: <div class="main"><div class="center"><input type="checkbox" name="" /><span className="span">ON</span><span className="span">OFF</span></div></div>,
        techlead: <div class="main"><div class="center"><input type="checkbox" name="" /><span className="span">ON</span><span className="span">OFF</span></div></div>,
        qalead: <div class="main"><div class="center"><input type="checkbox" name="" /><span className="span">ON</span><span className="span">OFF</span></div></div>
    },
    {
        Privilege: 'QA Dashboard',
        projectmanager: <div class="main"><div class="center"><input type="checkbox" name="" /><span className="span">ON</span><span className="span">OFF</span></div></div>,
        developer: <div class="main"><div class="center"><input type="checkbox" name="" /><span className="span">ON</span><span className="span">OFF</span></div></div>,
        qa: <div class="main"><div class="center"><input type="checkbox" name="" /><span className="span">ON</span><span className="span">OFF</span></div></div>,
        techlead: <div class="main"><div class="center"><input type="checkbox" name="" /><span className="span">ON</span><span className="span">OFF</span></div></div>,
        qalead: <div class="main"><div class="center"><input type="checkbox" name="" /><span className="span">ON</span><span className="span">OFF</span></div></div>
    },
    {
        Privilege: 'QA Privilage',
        projectmanager: <div class="main"><div class="center"><input type="checkbox" name="" /><span className="span">ON</span><span className="span">OFF</span></div></div>,
        developer: <div class="main"><div class="center"><input type="checkbox" name="" /><span className="span">ON</span><span className="span">OFF</span></div></div>,
        qa: <div class="main"><div class="center"><input type="checkbox" name="" /><span className="span">ON</span><span className="span">OFF</span></div></div>,
        techlead: <div class="main"><div class="center"><input type="checkbox" name="" /><span className="span">ON</span><span className="span">OFF</span></div></div>,
        qalead: <div class="main"><div class="center"><input type="checkbox" name="" /><span className="span">ON</span><span className="span">OFF</span></div></div>
    },
]
export const CompanyPrivilege = () => {
    return (
        <div>
        <Grid direction="row" container>
            <Grid item xs={11} style={{ marginTop: '2%',textAlign:'center',justifyContent:'center' }}>
                <Segment>
                    <Table column={column} data={privilege} />
                </Segment>
            </Grid>
        </Grid>
    </div>
    )
}
export default CompanyPrivilege
