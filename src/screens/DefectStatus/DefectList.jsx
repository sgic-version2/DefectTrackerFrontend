import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'
import { Grid } from '@material-ui/core'
import DefectListButton from './DefectListButton'
import BreadCrumbs from '../../components/breadCrumbs/breadCrumbs'
import Table from './Table'


export default class ProjectAllocation extends Component {


  

    render() {
        return (
            <div>
                <Grid item xs={11} style={{ marginTop: '2%' }}>
                    <Segment>
                       {/* <AddD open={this.state.open} handleClose={this.handleClose} handleOpen={this.handleOpen}  />
                       <Button color="primary" onClick={this.handleOpen}>Add Defect</Button> */}
                        <BreadCrumbs /> 
                        <DefectListButton />
                        <Table/>
                        {/* <Table column={columns} data={data}/> */}
                    </Segment>
                </Grid>
            </div>
        )
    }
}
