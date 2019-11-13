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
                        <BreadCrumbs />
                        <DefectListButton />
                        <Table />
                    </Segment>
                </Grid>
            </div>
        )
    }
}
