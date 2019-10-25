import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'
import { Grid } from '@material-ui/core'
import AllocationButton from './AllocationButton'
import BreadCrumbs from '../../components/breadCrumbs/breadCrumbs'

export default class ProjectAllocation extends Component {
    render() {
        return (
            <div>
                <Grid item xs={11} style={{ marginTop: '10px' }}>
                    <Segment>
                        <BreadCrumbs />
                        <AllocationButton />
                    </Segment>
                </Grid>
            </div>
        )
    }
}
