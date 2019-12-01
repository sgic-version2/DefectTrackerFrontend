import React from 'react'
import { Segment } from 'semantic-ui-react'
import { Grid } from '@material-ui/core'
import Table from '../../../components/tables/table'

const column = [
    { title: 'Privilege', dataIndex: 'Privilege' },
    { title: 'TechLead', dataIndex: 'techlead' }
]
const privilege = [
    {
        // name: 'Privilege', button: 'QA'
        Privilege: 'Add Defect', techlead: <div class="main"><div class="center"><input type="checkbox" name="" /><span className="span">ON</span><span className="span">OFF</span></div></div>
    },
    {
        Privilege: 'Edit Defect', techlead: <div class="main"><div class="center"><input type="checkbox" name="" /><span className="span">ON</span><span className="span">OFF</span></div></div>
    },
    {
        Privilege: 'Manage Defect', techlead: <div class="main"><div class="center"><input type="checkbox" name="" /><span className="span">ON</span><span className="span">OFF</span></div></div>
    },
    {
        Privilege: 'Defect Dashboard', techlead: <div class="main"><div class="center"><input type="checkbox" name="" /><span className="span">ON</span><span className="span">OFF</span></div></div>
    },
    {
        Privilege: 'Add Module', techlead: <div class="main"><div class="center"><input type="checkbox" name="" /><span className="span">ON</span><span className="span">OFF</span></div></div>
    },
    {
        Privilege: 'Edit Module', techlead: <div class="main"><div class="center"><input type="checkbox" name="" /><span className="span">ON</span><span className="span">OFF</span></div></div>
    },
    {
        Privilege: 'Manage Module', techlead: <div class="main"><div class="center"><input type="checkbox" name="" /><span className="span">ON</span><span className="span">OFF</span></div></div>
    },
    {
        Privilege: 'Add Submodule', techlead: <div class="main"><div class="center"><input type="checkbox" name="" /><span className="span">ON</span><span className="span">OFF</span></div></div>
    },
    {
        Privilege: 'Edit Submodule', techlead: <div class="main"><div class="center"><input type="checkbox" name="" /><span className="span">ON</span><span className="span">OFF</span></div></div>
    },
    {
        Privilege: 'Manage Submodule', techlead: <div class="main"><div class="center"><input type="checkbox" name="" /><span className="span">ON</span><span className="span">OFF</span></div></div>
    },
    {
        Privilege: 'QA Dashboard', techlead: <div class="main"><div class="center"><input type="checkbox" name="" /><span className="span">ON</span><span className="span">OFF</span></div></div>
    },
    {
        Privilege: 'QA Privilage', techlead: <div class="main"><div class="center"><input type="checkbox" name="" /><span className="span">ON</span><span className="span">OFF</span></div></div>
    },
]
const TechLeadPrivilege = () => {

    return (
        <div>
            <Grid direction="row" container >
                <Grid item xs={11} style={{ marginTop: '2%', textAlign: 'center', justifyContent: 'center' }}>
                    <Segment >
                        <Table column={column} data={privilege} className="techLeadPrivilage"/>
                    </Segment>
                </Grid>
            </Grid>
        </div>
    )
}
export default TechLeadPrivilege