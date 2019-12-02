import React from 'react'
import { Segment } from 'semantic-ui-react'
import { Grid } from '@material-ui/core'
import Table from '../../../components/tables/table'

const column = [
    { title: 'Privilege', dataIndex: 'Privilege' },
    { title: 'QA', dataIndex: 'qa' }
]
const privilege = [
    {
        // name: 'Privilege', button: 'QA'
        Privilege: 'Add Defect', qa: <div class="main2"><div class="center"><input type="checkbox" name="" /><span className="span">ON</span><span className="span">OFF</span></div></div>
    },
    {
        Privilege: 'Edit Defect', qa: <div class="main2"><div class="center"><input type="checkbox" name="" /><span className="span">ON</span><span className="span">OFF</span></div></div>
    },
    {
        Privilege: 'Manage Defect', qa: <div class="main2"><div class="center"><input type="checkbox" name="" /><span className="span">ON</span><span className="span">OFF</span></div></div>
    },
    {
        Privilege: 'Defect Dashboard', qa: <div class="main2"><div class="center"><input type="checkbox" name="" /><span className="span">ON</span><span className="span">OFF</span></div></div>
    },
    {
        Privilege: 'Add Module', qa: <div class="main2"><div class="center"><input type="checkbox" name="" /><span className="span">ON</span><span className="span">OFF</span></div></div>
    },
    {
        Privilege: 'Edit Module', qa: <div class="main2"><div class="center"><input type="checkbox" name="" /><span className="span">ON</span><span className="span">OFF</span></div></div>
    },
    {
        Privilege: 'Manage Module', qa: <div class="main2"><div class="center"><input type="checkbox" name="" /><span className="span">ON</span><span className="span">OFF</span></div></div>
    },
    {
        Privilege: 'Add Submodule', qa: <div class="main2"><div class="center"><input type="checkbox" name="" /><span className="span">ON</span><span className="span">OFF</span></div></div>
    },
    {
        Privilege: 'Edit Submodule', qa: <div class="main2"><div class="center"><input type="checkbox" name="" /><span className="span">ON</span><span className="span">OFF</span></div></div>
    },
    {
        Privilege: 'Manage Submodule', qa: <div class="main2"><div class="center"><input type="checkbox" name="" /><span className="span">ON</span><span className="span">OFF</span></div></div>
    },
    {
        Privilege: 'QA Dashboard', qa: <div class="main2"><div class="center"><input type="checkbox" name="" /><span className="span">ON</span><span className="span">OFF</span></div></div>
    },
    {
        Privilege: 'QA Privilage', qa: <div class="main2"><div class="center"><input type="checkbox" name="" /><span className="span">ON</span><span className="span">OFF</span></div></div>
    },
]
const QALeadPrivileges = () => {

    return (
        <div>
            <Grid direction="row" container>
                <Grid item xs={11} style={{ marginTop: '2%', textAlign: 'center', justifyContent: 'center' }}>
                    <Segment>
                        <Table column={column} data={privilege} className="QaLeadPrivilage" />
                    </Segment>
                </Grid>
            </Grid>
        </div>
    )
}
export default QALeadPrivileges